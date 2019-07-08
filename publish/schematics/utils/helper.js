"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-any typedef */
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const core_1 = require("@angular-devkit/core");
const route_config_1 = require("./route-config");
const schematics_2 = require("@angular/cdk/schematics");
const ts = require("typescript");
const change_1 = require("@schematics/angular/utility/change");
const pluralize = require('pluralize');
function getProject(tree, options) {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
        throw new schematics_1.SchematicsException('Could not find Angular workspace configuration');
    }
    const workspaceContent = workspaceConfig.toString();
    const workspace = JSON.parse(workspaceContent);
    if (!options.project) {
        options.project = workspace.defaultProject;
    }
    const projectName = options.project;
    const project = workspace.projects[projectName];
    return project;
}
exports.getProject = getProject;
function findRoutingModuleByName(tree, options) {
    const project = getProject(tree, options);
    const projectType = project.projectType === 'application' ? 'app' : 'lib';
    if (options.path === undefined) {
        options.path = `${project.sourceRoot}/${projectType}`;
    }
    const module = route_config_1.findRoutingModule(tree, options.path);
    return module;
}
exports.findRoutingModuleByName = findRoutingModuleByName;
function addRoutesToModule(options, resource) {
    return (tree) => {
        const routePath = findRoutingModuleByName(tree, options);
        if (routePath) {
            const changes = [];
            const recorder = tree.beginUpdate(routePath);
            // console.log(routePath);
            const moduleSource = schematics_2.getSourceFile(tree, routePath);
            const nodes = ast_utils_1.findNodes(moduleSource, ts.SyntaxKind.VariableDeclaration);
            const RouteNode = nodes.filter(node => {
                return ((node.getChildren()[2])).getText() === 'Routes';
            });
            RouteNode.forEach(node => {
                const array = node.getChildren().filter(a_node => {
                    return a_node.kind === ts.SyntaxKind.ArrayLiteralExpression;
                });
                console.log(array[0].getText());
                // console.log(array[0].getChildren()[0].getText());
                // changes.push(insertAfterLastOccurrence(array[0].getChildren()[0].getChildren(), '{name: a}', routePath as string, 0));
                // console.log(((array[0] as ts.Node).getLastToken() as ts.Node).getText());
                const lastItem = (array[0]).getChildren()[array[0].getChildren().length - 1];
                const position = lastItem.getStart();
                changes.push(new change_1.InsertChange(routePath, position, `{path: '${pluralize(resource)}', loadChildren: () => import('./${core_1.strings.dasherize(resource)}/${core_1.strings.dasherize(resource)}.module').then(m => m.${core_1.strings.classify(resource)}Module) }`));
            });
            changes.forEach((change) => {
                if (change instanceof change_1.InsertChange) {
                    recorder.insertLeft(change.pos, change.toAdd);
                }
            });
            tree.commitUpdate(recorder);
        }
        return tree;
    };
}
exports.addRoutesToModule = addRoutesToModule;
function getTtConfig(tree) {
    const configFile = tree.read('/tt.config.json');
    if (!configFile) {
        throw new schematics_1.SchematicsException('Could not find Angular workspace configuration');
    }
    const configString = configFile.toString();
    const workspace = JSON.parse(configString);
    return workspace;
}
exports.getTtConfig = getTtConfig;
//# sourceMappingURL=helper.js.map