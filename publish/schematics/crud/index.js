"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const core_1 = require("@angular-devkit/core");
const helper_1 = require("../utils/helper");
const find_module_1 = require("@schematics/angular/utility/find-module");
const pluralize = require('pluralize');
function Crud(options) {
    return (tree, context) => {
        const workspaceConfig = tree.read('/angular.json');
        if (!workspaceConfig) {
            throw new schematics_1.SchematicsException('Could not find Angular workspace configuration');
        }
        const workspaceContent = workspaceConfig.toString();
        const workspace = JSON.parse(workspaceContent);
        const config = helper_1.getTtConfig(tree);
        if (!options.project) {
            options.project = config.project || workspace.defaultProject;
        }
        const projectName = options.project;
        const project = workspace.projects[projectName];
        // tslint:disable-next-line:no-any
        const style = (((project || { schematics: {} }).schematics || {})['@schematics/angular:component'] || {}).style || 'scss';
        const projectType = project.projectType === 'application' ? 'app' : 'lib';
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        const response_ok = config.response_ok || '20000';
        const base_route = config.base_route || '/dashboard';
        const service_relative = find_module_1.buildRelativePath(`/${options.path}`, '/' + config.generate_file_path.services);
        const model_relative = find_module_1.buildRelativePath(`/${options.path}`, '/' + config.generate_file_path.models);
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates(Object.assign({}, core_1.strings, { pluralize, api_prefix: config.api_prefix, model_relative,
                service_relative,
                response_ok,
                base_route, component_prefix: project.prefix, style_suffix: style, name: options.name })),
            schematics_1.move(core_1.normalize(options.path))
        ]);
        context.addTask(new tasks_1.RunSchematicTask('service', options));
        context.addTask(new tasks_1.RunSchematicTask('model', options));
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource),
            helper_1.addRoutesToModule(options, options.name)
        ]);
    };
}
exports.Crud = Crud;
//# sourceMappingURL=index.js.map