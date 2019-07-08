"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const add_required_modules_1 = require("../add-required-modules");
function default_1(options) {
    return schematics_1.chain([
        add_required_modules_1.addRequiredModules(options)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map