import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { addPackageToPackageJson } from '../utils/package-config';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';
// Just return the tree
// tslint:disable-next-line:no-any
export function ngAdd(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addPackageToPackageJson(tree, 'at-ng', '^8.0.2-rc4');
    addPackageToPackageJson(tree, '@angular/cdk', '^8.0.0');
    const installTaskId = context.addTask(new NodePackageInstallTask());
    context.addTask(new RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
    context.addTask(new RunSchematicTask('theme', options));
    return tree;
  };
}
