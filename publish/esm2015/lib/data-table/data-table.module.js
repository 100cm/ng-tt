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
export class TtDataTableModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXRhYmxlL2RhdGEtdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDakMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBY25ELE1BQU0sT0FBTyxpQkFBaUI7OztZQVo3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzNELE9BQU8sRUFBRTtvQkFDUCxRQUFRO29CQUNSLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXRNb2R1bGUgfSBmcm9tICdhdC1uZyc7XG5pbXBvcnQgeyBDb21tb25EYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi1kYXRhLXRhYmxlL2NvbW1vbi1kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZXN0ZWRKc29uS2V5UGlwZSB9IGZyb20gJy4vbmVzdGVkLWpzb24ta2V5LnBpcGUnO1xuaW1wb3J0IHsgVHRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9jb21wb25lbnQvY29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBUdEkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL2kxOG4ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29tbW9uRGF0YVRhYmxlQ29tcG9uZW50LCBOZXN0ZWRKc29uS2V5UGlwZV0sXG4gIGltcG9ydHM6IFtcbiAgICBBdE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVHRJMThuTW9kdWxlLFxuICAgIFR0Q29tcG9uZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQ29tbW9uRGF0YVRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUdERhdGFUYWJsZU1vZHVsZSB7XG59XG4iXX0=