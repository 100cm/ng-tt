"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const helper_1 = require("../utils/helper");
const pluralize = require('pluralize');
function Service(options) {
    return (tree) => {
        const project = helper_1.getProject(tree, options);
        const projectType = project.projectType === 'application' ? 'app' : 'lib';
        const config = helper_1.getTtConfig(tree);
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates({
                classify: core_1.strings.classify,
                dasherize: core_1.strings.dasherize,
                pluralize,
                api_prefix: config.api_prefix,
                name: options.name
            }),
            schematics_1.move(core_1.normalize(config.generate_file_path.services || options.path))
        ]);
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource)
        ]);
    };
}
exports.Service = Service;
//# sourceMappingURL=index.js.map