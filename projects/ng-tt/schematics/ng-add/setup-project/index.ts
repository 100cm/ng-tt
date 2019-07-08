import { chain, Rule } from '@angular-devkit/schematics';
import { Schema } from '../schema';
import { addRequiredModules } from '../add-required-modules';

export default function(options: Schema): Rule {
  return chain([
    addRequiredModules(options)
  ])
    ;
}
