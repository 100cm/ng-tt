import { Tree, Rule } from '@angular-devkit/schematics';
import { experimental } from '@angular-devkit/core';
interface TtConfig {
    project: string;
    api_prefix: string;
    base_route: string;
    response_ok: string;
    generate_file_path: {
        models: string;
        services: string;
    };
}
export declare function getProject(tree: Tree, options: any): experimental.workspace.WorkspaceProject;
export declare function findRoutingModuleByName(tree: Tree, options: any): import("@angular-devkit/core").Path;
export declare function addRoutesToModule(options: any, resource: string): Rule;
export declare function getTtConfig(tree: Tree): TtConfig;
export {};
