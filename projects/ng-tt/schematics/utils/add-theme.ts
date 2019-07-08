import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';
import {
  getProjectTargetOptions
} from '@angular/cdk/schematics';

import { strings, normalize, experimental } from '@angular-devkit/core';

import { WorkspaceProject } from '@schematics/angular/utility/workspace-models';

const defaultTargetBuilders = {
  build: '@angular-devkit/build-angular:browser',
  test: '@angular-devkit/build-angular:karma'
};
const defaultCustomThemeFilename = 'theme.scss';

export function addThemeStyleToTarget(project: experimental.workspace.WorkspaceProject, targetName: 'test' | 'build', host: Tree,
                                      assetPath: string, workspace: experimental.workspace.WorkspaceSchema): void {
  // Do not update the builder options in case the target does not use the default CLI builder.
  if (!validateDefaultTargetBuilder(project, targetName)) {
    return;
  }

  const targetOptions = getProjectTargetOptions(project, targetName);

  if (!targetOptions.styles) {
    targetOptions.styles = [assetPath];
  } else {
    const existingStyles = targetOptions.styles.map(s => typeof s === 'string' ? s : s.input);

    for (const [index, stylePath] of existingStyles.entries()) {
      // If the given asset is already specified in the styles, we don't need to do anything.
      if (stylePath === assetPath) {
        return;
      }

      // In case a prebuilt theme is already set up, we can safely replace the theme with the new
      // theme file. If a custom theme is set up, we are not able to safely replace the custom
      // theme because these files can contain custom styles, while prebuilt themes are
      // always packaged and considered replaceable.
      if (stylePath.includes(defaultCustomThemeFilename)) {
        return;
      }
    }

    targetOptions.styles.unshift(assetPath);
  }
  targetOptions.styles = assetPath;

  host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}

function validateDefaultTargetBuilder(project: experimental.workspace.WorkspaceProject, targetName: 'build' | 'test'): boolean {
  const defaultBuilder = defaultTargetBuilders[targetName];
  const targetConfig = project.architect && project.architect[targetName] ||
    project.targets && project.targets[targetName];
  const isDefaultBuilder = targetConfig && targetConfig.builder === defaultBuilder;

  if (!isDefaultBuilder && targetName === 'build') {

  } else if (!isDefaultBuilder) {
    console.warn(`Your project is not using the default builders for "${targetName}". This ` +
      `means that we cannot add the configured theme to the "${targetName}" target.`);
  }

  return isDefaultBuilder;
}
