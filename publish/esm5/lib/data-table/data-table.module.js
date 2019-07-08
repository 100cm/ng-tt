/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AtModule } from 'at-ng';
import { CommonDataTableComponent } from './common-data-table/common-data-table.component';
import { NestedJsonKeyPipe } from './nested-json-key.pipe';
import { TtComponentModule } from '../component/component.module';
import { TtI18nModule } from '../i18n/i18n.module';
var TtDataTableModule = /** @class */ (function () {
    function TtDataTableModule() {
    }
    TtDataTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CommonDataTableComponent, NestedJsonKeyPipe],
                    imports: [
                        AtModule,
                        FormsModule,
                        RouterModule,
                        TtI18nModule,
                        TtComponentModule,
                        CommonModule
                    ],
                    exports: [CommonDataTableComponent]
                },] }
    ];
    return TtDataTableModule;
}());
export { TtDataTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXRhYmxlL2RhdGEtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDakMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5EO0lBQUE7SUFhQSxDQUFDOztnQkFiQSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUM7b0JBQzNELE9BQU8sRUFBRTt3QkFDUCxRQUFRO3dCQUNSLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDcEM7O0lBRUQsd0JBQUM7Q0FBQSxBQWJELElBYUM7U0FEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF0TW9kdWxlIH0gZnJvbSAnYXQtbmcnO1xuaW1wb3J0IHsgQ29tbW9uRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmVzdGVkSnNvbktleVBpcGUgfSBmcm9tICcuL25lc3RlZC1qc29uLWtleS5waXBlJztcbmltcG9ydCB7IFR0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50L2NvbXBvbmVudC5tb2R1bGUnO1xuaW1wb3J0IHsgVHRJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9pMThuLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbW1vbkRhdGFUYWJsZUNvbXBvbmVudCwgTmVzdGVkSnNvbktleVBpcGVdLFxuICBpbXBvcnRzOiBbXG4gICAgQXRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFR0STE4bk1vZHVsZSxcbiAgICBUdENvbXBvbmVudE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0NvbW1vbkRhdGFUYWJsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVHREYXRhVGFibGVNb2R1bGUge1xufVxuIl19