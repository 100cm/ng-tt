/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AT_I18N, zh_CN } from 'at-ng';
import { I18N_TOKEN } from './i18n-token';
import { TtI18nPipe } from './i18n.pipe';
import { TtI18nComponent } from './i18n.component';
var TtI18nModule = /** @class */ (function () {
    function TtI18nModule() {
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    TtI18nModule.forRoot = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return {
            ngModule: TtI18nModule,
            providers: [{ provide: AT_I18N, useValue: zh_CN }, { provide: I18N_TOKEN, useValue: locale }]
        };
    };
    TtI18nModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TtI18nPipe,
                        TtI18nComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [TtI18nPipe, TtI18nComponent]
                },] }
    ];
    return TtI18nModule;
}());
export { TtI18nModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9pMThuL2kxOG4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRDtJQUFBO0lBa0JBLENBQUM7Ozs7O0lBTlEsb0JBQU87Ozs7SUFBZCxVQUFlLE1BQXNCO1FBQ25DLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDMUYsQ0FBQztJQUNKLENBQUM7O2dCQWpCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLFVBQVU7d0JBQ1YsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztpQkFDdkM7O0lBU0QsbUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFUX0kxOE4sIHpoX0NOIH0gZnJvbSAnYXQtbmcnO1xuaW1wb3J0IHsgSTE4Tl9UT0tFTiB9IGZyb20gJy4vaTE4bi10b2tlbic7XG5pbXBvcnQgeyBUdDE4bkludGVyZmFjZSB9IGZyb20gJy4vaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHRJMThuUGlwZSB9IGZyb20gJy4vaTE4bi5waXBlJztcbmltcG9ydCB7IFR0STE4bkNvbXBvbmVudCB9IGZyb20gJy4vaTE4bi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUdEkxOG5QaXBlLFxuICAgIFR0STE4bkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtUdEkxOG5QaXBlLCBUdEkxOG5Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFR0STE4bk1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QobG9jYWxlOiBUdDE4bkludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHRJMThuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEFUX0kxOE4sIHVzZVZhbHVlOiB6aF9DTn0sIHtwcm92aWRlOiBJMThOX1RPS0VOLCB1c2VWYWx1ZTogbG9jYWxlfV1cbiAgICB9O1xuICB9XG59XG4iXX0=