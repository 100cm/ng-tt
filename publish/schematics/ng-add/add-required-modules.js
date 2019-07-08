"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const chalk_1 = require("chalk");
const helper_1 = require("../utils/helper");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const modules = [
    { name: 'at-ng', value: 'AtModule' },
    { name: 'ng-tt', value: 'TtI18nModule.forRoot({locale: zhCN})' },
    { name: 'ng-tt', value: 'TtHttpModule.config({apiUid: "",apiSecret: ""}, "/sign_out")' },
    { name: '@angular/forms', value: 'FormsModule' },
    { name: '@angular/common/http', value: 'HttpClientModule' }
];
function addRequiredModules(options) {
    return (host) => {
        const project = helper_1.getProject(host, options);
        const appModulePath = ng_ast_utils_1.getAppModulePath(host, schematics_1.getProjectMainFile(project));
        const moduleSource = schematics_1.getSourceFile(host, appModulePath);
        const recorder = host.beginUpdate(appModulePath);
        const changes = [
            ast_utils_1.insertImport(moduleSource, appModulePath, 'zhCN', 'ng-tt')
        ];
        changes.forEach((change) => {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        });
        host.commitUpdate(recorder);
        modules.forEach(module => {
            addModuleImportToApptModule(host, module.value, module.name, project, appModulePath);
        });
        return host;
    };
}
exports.addRequiredModules = addRequiredModules;
function addModuleImportToApptModule(host, moduleName, src, project, appModulePath) {
    if (schematics_1.hasNgModuleImport(host, appModulePath, moduleName)) {
        console.log(chalk_1.default.yellow(`Could not set up "${chalk_1.default.blue(moduleName)}" ` +
            `because "${chalk_1.default.blue(moduleName)}" is already imported. Please manually ` +
            `check "${chalk_1.default.blue(appModulePath)}" file.`));
        return;
    }
    schematics_1.addModuleImportToRootModule(host, moduleName, src, project);
}
//# sourceMappingURL=add-required-modules.js.map