import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith, SchematicContext
} from '@angular-devkit/schematics';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { strings, normalize, experimental } from '@angular-devkit/core';
import { Schema as ServiceSchema } from './schema';
import { addRoutesToModule, getTtConfig } from '../utils/helper';
import { buildRelativePath } from '@schematics/angular/utility/find-module';

const pluralize = require('pluralize');

export function Crud(options: ServiceSchema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }
    const workspaceContent = workspaceConfig.toString();
    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);
    const config = getTtConfig(tree);
    if (!options.project) {
      options.project = config.project || workspace.defaultProject;
    }

    const projectName = options.project as string;

    const project = workspace.projects[projectName];

    // tslint:disable-next-line:no-any
    const style = (((project || {schematics: {}}).schematics || {})['@schematics/angular:component'] || {}).style || 'scss';

    const projectType = project.projectType === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }
    const response_ok = config.response_ok || '20000';
    const base_route = config.base_route || '/dashboard';
    const service_relative = buildRelativePath(`/${options.path}`, '/' + config.generate_file_path.services);
    const model_relative = buildRelativePath(`/${options.path}`, '/' + config.generate_file_path.models);
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        pluralize,
        api_prefix: config.api_prefix,
        model_relative,
        service_relative,
        response_ok,
        base_route,
        component_prefix: project.prefix,
        style_suffix: style,
        name: options.name
      }),
      move(normalize(options.path))
    ]);
    context.addTask(new RunSchematicTask('service', options));
    context.addTask(new RunSchematicTask('model', options));
    return chain([
      mergeWith(templateSource),
      addRoutesToModule(options, options.name)
    ]);
  };
}
