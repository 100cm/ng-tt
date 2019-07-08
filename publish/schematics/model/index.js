"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-any */
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const helper_1 = require("../utils/helper");
const pluralize = require('pluralize');
function Model(options) {
    return (tree) => {
        const project = helper_1.getProject(tree, options);
        const projectType = project.projectType === 'application' ? 'app' : 'lib';
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        const config = helper_1.getTtConfig(tree);
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates({
                classify: core_1.strings.classify,
                dasherize: core_1.strings.dasherize,
                pluralize,
                api_prefix: 'api',
                name: options.name
            }),
            schematics_1.move(core_1.normalize(config.generate_file_path.models || options.path))
        ]);
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource)
        ]);
    };
}
exports.Model = Model;
//# sourceMappingURL=index.js.map