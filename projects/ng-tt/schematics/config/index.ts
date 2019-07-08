/* tslint:disable:no-any */
import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';

import { strings, normalize, experimental } from '@angular-devkit/core';
import { getProject } from '../utils/helper';
import { addThemeStyleToTarget } from '../utils/add-theme';

const pluralize = require('pluralize');

export function Config(options: any): Rule {
  return (tree: Tree) => {

    const project = getProject(tree, options);
    const projectType = project.projectType === 'application' ? 'app' : 'lib';
    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }
    const models_path = `${options.path}/models`;
    const services_path = `${options.path}/services`;
    const templateSource = apply(url('./files'), [
      applyTemplates({
        models_path,
        services_path,
        project: options.project
      }),
      move(normalize('/'))
    ]);

    return chain([
      mergeWith(templateSource)
    ]);
  };
}
