"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-any */
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const helper_1 = require("../utils/helper");
const pluralize = require('pluralize');
function Config(options) {
    return (tree) => {
        const project = helper_1.getProject(tree, options);
        const projectType = project.projectType === 'application' ? 'app' : 'lib';
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        const models_path = `${options.path}/models`;
        const services_path = `${options.path}/services`;
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates({
                models_path,
                services_path,
                project: options.project
            }),
            schematics_1.move(core_1.normalize('/'))
        ]);
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource)
        ]);
    };
}
exports.Config = Config;
//# sourceMappingURL=index.js.map