/* tslint:disable:no-any */
import {
  Rule, Tree,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';

import { strings, normalize } from '@angular-devkit/core';
import { getProject, getTtConfig } from '../utils/helper';

const pluralize = require('pluralize');

export function Model(options: any): Rule {
  return (tree: Tree) => {

    const project = getProject(tree, options);

    const projectType = project.projectType === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }
    const config = getTtConfig(tree);
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        pluralize,
        api_prefix: 'api',
        name: options.name
      }),
      move(normalize(config.generate_file_path.models || options.path as string))
    ]);
    return chain([
      mergeWith(templateSource)
    ]);
  };
}
