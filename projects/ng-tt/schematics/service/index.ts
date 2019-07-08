import {
  Rule, Tree,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';

import { strings, normalize } from '@angular-devkit/core';
import { Schema as ServiceSchema } from './schema';
import { getProject, getTtConfig } from '../utils/helper';

const pluralize = require('pluralize');

export function Service(options: ServiceSchema): Rule {
  return (tree: Tree) => {

    const project = getProject(tree, options);

    const projectType = project.projectType === 'application' ? 'app' : 'lib';
    const config = getTtConfig(tree);
    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        pluralize,
        api_prefix: config.api_prefix,
        name: options.name
      }),
      move(normalize(config.generate_file_path.services || options.path as string))
    ]);
    return chain([
      mergeWith(templateSource)
    ]);
  };
}
