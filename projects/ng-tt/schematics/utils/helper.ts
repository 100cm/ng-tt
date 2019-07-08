/* tslint:disable:no-any typedef */
import {
  Tree, SchematicsException, Rule,
} from '@angular-devkit/schematics';
import {
  findNodes
} from '@schematics/angular/utility/ast-utils';
import { experimental, strings } from '@angular-devkit/core';
import { findRoutingModule } from './route-config';
import { getSourceFile } from '@angular/cdk/schematics';
import * as ts from 'typescript';
import { Change, InsertChange } from '@schematics/angular/utility/change';

const pluralize = require('pluralize');

interface TtConfig {
  project: string;
  api_prefix: string;
  base_route: string;
  response_ok: string;
  generate_file_path: { models: string, services: string };
}

export function getProject(tree: Tree, options: any): experimental.workspace.WorkspaceProject {
  const workspaceConfig = tree.read('/angular.json');
  if (!workspaceConfig) {
    throw new SchematicsException('Could not find Angular workspace configuration');
  }
  const workspaceContent = workspaceConfig.toString();
  const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);
  if (!options.project) {
    options.project = workspace.defaultProject;
  }
  const projectName = options.project as string;

  const project = workspace.projects[projectName];

  return project;
}

export function findRoutingModuleByName(tree: Tree, options: any) {
  const project = getProject(tree, options);
  const projectType = project.projectType === 'application' ? 'app' : 'lib';

  if (options.path === undefined) {
    options.path = `${project.sourceRoot}/${projectType}`;
  }
  const module = findRoutingModule(tree, options.path);
  return module;
}

export function addRoutesToModule(options: any, resource: string): Rule {
  return (tree: Tree) => {
    const routePath = findRoutingModuleByName(tree, options);
    if (routePath) {
      const changes: Change[] = [];
      const recorder = tree.beginUpdate(routePath as string);
      // console.log(routePath);
      const moduleSource = getSourceFile(tree, routePath as string);
      const nodes = findNodes(moduleSource, ts.SyntaxKind.VariableDeclaration);

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
        changes.push(new InsertChange(routePath as string, position, `{path: '${pluralize(resource)}', loadChildren: () => import('./${strings.dasherize(resource)}/${strings.dasherize(resource)}.module').then(m => m.${strings.classify(resource)}Module) }`));
      });
      changes.forEach((change) => {
        if (change instanceof InsertChange) {
          recorder.insertLeft(change.pos, change.toAdd);
        }
      });
      tree.commitUpdate(recorder);

    }
    return tree;
  };
}

export function getTtConfig(tree: Tree): TtConfig {
  const configFile = tree.read('/tt.config.json');
  if (!configFile) {
    throw new SchematicsException('Could not find Angular workspace configuration');
  }
  const configString = configFile.toString();
  const workspace = JSON.parse(configString);
  return workspace;
}
