"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_config_1 = require("../utils/package-config");
const tasks_1 = require("@angular-devkit/schematics/tasks");
// Just return the tree
// tslint:disable-next-line:no-any
function ngAdd(options) {
    return (tree, context) => {
        package_config_1.addPackageToPackageJson(tree, 'at-ng', '^8.0.2-rc4');
        package_config_1.addPackageToPackageJson(tree, '@angular/cdk', '^8.0.0');
        const installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
        context.addTask(new tasks_1.RunSchematicTask('ng-add-setup-project', options), [installTaskId]);
        context.addTask(new tasks_1.RunSchematicTask('theme', options));
        return tree;
    };
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map