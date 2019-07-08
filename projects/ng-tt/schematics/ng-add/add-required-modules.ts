/* tslint:disable:no-any */
import { Rule, Tree } from '@angular-devkit/schematics';
import {
  addModuleImportToRootModule,
  getProjectMainFile, getSourceFile,
  hasNgModuleImport
} from '@angular/cdk/schematics';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import chalk from 'chalk';
import { Schema } from './schema';
import { getProject } from '../utils/helper';
import { addImport } from '@angular/core/schematics/migrations/injectable-pipe/util';
import { addImportToModule, findNodes, insertImport } from '@schematics/angular/utility/ast-utils';
import * as ts from 'typescript';
import { InsertChange } from '@schematics/angular/utility/change';

const modules = [
  {name: 'at-ng', value: 'AtModule'},
  {name: 'ng-tt', value: 'TtI18nModule.forRoot({locale: zhCN})'},
  {name: 'ng-tt', value: 'TtHttpModule.config({apiUid: "",apiSecret: ""}, "/sign_out")'},
  {name: '@angular/forms', value: 'FormsModule'},
  {name: '@angular/common/http', value: 'HttpClientModule'}
];

export function addRequiredModules(options: Schema): Rule {
  return (host: Tree) => {
    const project = getProject(host, options);
    const appModulePath = getAppModulePath(host, getProjectMainFile(project));
    const moduleSource = getSourceFile(host, appModulePath);

    const recorder = host.beginUpdate(appModulePath);

    const changes = [
      insertImport(moduleSource, appModulePath, 'zhCN',
        'ng-tt')
    ];

    changes.forEach((change) => {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    });

    host.commitUpdate(recorder);
    modules.forEach(module => {
      addModuleImportToApptModule(host, module.value, module.name,
        project, appModulePath);

    });
    return host;
  };
}

function addModuleImportToApptModule(host: Tree, moduleName: string, src: string,
                                     project: any, appModulePath: string,
): void {
  if (hasNgModuleImport(host, appModulePath, moduleName)) {
    console.log(chalk.yellow(`Could not set up "${chalk.blue(moduleName)}" ` +
      `because "${chalk.blue(moduleName)}" is already imported. Please manually ` +
      `check "${chalk.blue(appModulePath)}" file.`));
    return;
  }

  addModuleImportToRootModule(host, moduleName, src, project);
}
