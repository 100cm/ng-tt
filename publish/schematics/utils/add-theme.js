"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const defaultTargetBuilders = {
    build: '@angular-devkit/build-angular:browser',
    test: '@angular-devkit/build-angular:karma'
};
const defaultCustomThemeFilename = 'theme.scss';
function addThemeStyleToTarget(project, targetName, host, assetPath, workspace) {
    // Do not update the builder options in case the target does not use the default CLI builder.
    if (!validateDefaultTargetBuilder(project, targetName)) {
        return;
    }
    const targetOptions = schematics_1.getProjectTargetOptions(project, targetName);
    if (!targetOptions.styles) {
        targetOptions.styles = [assetPath];
    }
    else {
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
exports.addThemeStyleToTarget = addThemeStyleToTarget;
function validateDefaultTargetBuilder(project, targetName) {
    const defaultBuilder = defaultTargetBuilders[targetName];
    const targetConfig = project.architect && project.architect[targetName] ||
        project.targets && project.targets[targetName];
    const isDefaultBuilder = targetConfig && targetConfig.builder === defaultBuilder;
    if (!isDefaultBuilder && targetName === 'build') {
    }
    else if (!isDefaultBuilder) {
        console.warn(`Your project is not using the default builders for "${targetName}". This ` +
            `means that we cannot add the configured theme to the "${targetName}" target.`);
    }
    return isDefaultBuilder;
}
//# sourceMappingURL=add-theme.js.map