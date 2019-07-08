/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../../helper/data-cheker';
/**
 * @record
 */
export function SearchColumn() { }
if (false) {
    /** @type {?} */
    SearchColumn.prototype.name;
    /** @type {?} */
    SearchColumn.prototype.key;
    /** @type {?} */
    SearchColumn.prototype.type;
    /** @type {?|undefined} */
    SearchColumn.prototype.data_source;
    /** @type {?|undefined} */
    SearchColumn.prototype.async;
    /** @type {?} */
    SearchColumn.prototype.multiple;
    /**
     * @return {?}
     */
    SearchColumn.prototype.changeAction = function () { };
}
var SearchGroupComponent = /** @class */ (function () {
    function SearchGroupComponent() {
        this.search_columns = [];
        this.search_params = {};
        this.onSearch = new EventEmitter();
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.show_more = false;
        this.range_keys = {};
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    SearchGroupComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SearchGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    SearchGroupComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (isNotNil(obj)) {
            this.search_params = obj;
        }
    };
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.onSearch.emit();
    };
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.search_params = {};
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.range_keys = {};
        this.onChange(this.search_params);
    };
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    SearchGroupComponent.prototype.changeCreate = /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    function ($event, after) {
        this.search_params['search[between_created_at]'] = this.created_at_before + "," + this.created_at_after;
        this.onChange(this.search_params);
    };
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    SearchGroupComponent.prototype.changeUpdate = /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    function ($event, after) {
        this.search_params['search[between_updated_at]'] = this.updated_at_before + "," + this.updated_at_after;
        this.onChange(this.search_params);
    };
    /**
     * @param {?} value
     * @param {?} key
     * @param {?} after
     * @return {?}
     */
    SearchGroupComponent.prototype.setRange = /**
     * @param {?} value
     * @param {?} key
     * @param {?} after
     * @return {?}
     */
    function (value, key, after) {
        if (!this.range_keys[key]) {
            this.range_keys[key] = { before: '', after: '' };
        }
        this.range_keys[key][after] = value;
        this.search_params["search[between_" + key + "]"] = this.range_keys[key].before + " , " + this.range_keys[key].after;
        this.onChange(this.search_params);
    };
    SearchGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-search-group',
                    template: "\n    <div at-row class=\"search-bar-container\">\n      <div *ngFor=\"let item of search_columns;let i =index\" at-col [span]=\"item.type ==='range'? 11 : 5\"\n           [offset]=\" ((i) % 4) == 0 ? 0 : 1\">\n        <at-form-item>\n          <div at-col [span]=\"24\" class=\"search-label\">\n            {{ (\"Model.\" + item.name) | I18n | async}}\n          </div>\n          <at-form-control [span]=\"24\">\n            <ng-container [ngSwitch]=\"item.type\">\n              <input class=\"search-input\" *ngSwitchCase=\"'input'\" at-input\n                     [(ngModel)]=\"search_params['search[like_'+item.key +']']\">\n              <atInput class=\"search-input\" *ngSwitchCase=\"'number'\"\n                       [atType]=\"'number'\"\n                       [(ngModel)]=\"search_params['search['+item.key +']']\">\n              </atInput>\n              <at-select [multiple]=\"item.multiple\" [(ngModel)]=\"search_params['search['+item.key +']']\" *ngSwitchCase=\"'select'\"\n                         style=\"width: 290px\">\n                <at-option [atLabel]=\"'DataSource.all' | I18n | async\" [atValue]=\"''\"></at-option>\n                <at-option *ngFor=\"let option of  item.async ? (item.data_source | async) : item.data_source\"\n                           [atLabel]=\"option.name\"\n                           [atValue]=\"option.value\">\n                </at-option>\n              </at-select>\n              <ng-container *ngSwitchCase=\"'range'\">\n                <div at-row>\n                  <div at-col [span]=\"11\">\n                    <atDatetimePicker [ngModel]=\"range_keys[item.key]?.before\"\n                                      [inputIcon]=\"'calendar'\"\n                                      (ngModelChange)=\"setRange($event,item.key,'before')\"\n                                      [format]=\"'YYYY-MM-DD HH:mm:ss'\"></atDatetimePicker>\n                  </div>\n                  <div at-col [span]=\"1\" style=\"  left: 1%;position: relative\">\n                    <at-divider [height]=\"3\"></at-divider>\n                  </div>\n                  <div at-col [span]=\"11\" [offset]=\"1\">\n                    <atDatetimePicker [ngModel]=\"range_keys[item.key]?.after\"\n                                      [inputIcon]=\"'calendar'\"\n                                      (ngModelChange)=\"setRange($event,item.key,'after')\"\n                                      [format]=\"'YYYY-MM-DD HH:mm:ss'\"\n                                      [disableDate]=\"range_keys[item.key]?.before\"></atDatetimePicker>\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </at-form-control>\n        </at-form-item>\n\n      </div>\n      <ng-template [ngTemplateOutlet]=\"extra_search\"></ng-template>\n      <div at-col [span]=\"24\">\n        <div style=\"margin-bottom: 24px\">\n          <at-checkbox [label]=\"'Button.more_filter' | I18n | async\" [(ngModel)]=\"show_more\">\n          </at-checkbox>\n        </div>\n      </div>\n      <div *ngIf=\"show_more\" at-col [span]=\"24\">\n        <div at-row>\n          <div at-col [span]=\"11\">\n            <at-form-item>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col [span]=\"24\" class=\"search-label\">\n                    <tt-i18n [t]=\"'Model.Common.created_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"created_at_before\" [format]=\"'YYYY-MM-DD'\"\n                      (ngModelChange)=\"changeCreate($event,'after')\"\n                      [choice_modal]=\"'date'\"></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n              <div at-col [span]=\"2\" class=\"middle-line\">\n                <at-divider [height]=\"3\"></at-divider>\n              </div>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col class=\"search-label\" [span]=\"24\">\n                    <tt-i18n [t]=\"'Model.Common.created_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"created_at_after\" [disableDate]=\"created_at_before\"\n                      (ngModelChange)=\"changeCreate($event,'after')\"\n                      [choice_modal]=\"'date'\"\n                      [format]=\"'YYYY-MM-DD'\"\n                    ></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n            </at-form-item>\n          </div>\n          <div at-col [span]=\"11\" [offset]=\"1\">\n            <at-form-item>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col [span]=\"24\" class=\"search-label\">\n                    <tt-i18n [t]=\"'Model.Common.updated_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"updated_at_before\" [format]=\"'YYYY-MM-DD'\"\n                      (ngModelChange)=\"changeUpdate($event,'after')\"\n                      [choice_modal]=\"'date'\"></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n              <div at-col [span]=\"2\" class=\"middle-line\">\n                <at-divider [height]=\"3\"></at-divider>\n              </div>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col class=\"search-label\" [span]=\"24\">\n                    <tt-i18n [t]=\"'Model.Common.updated_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"updated_at_after\" [disableDate]=\"updated_at_before\"\n                      (ngModelChange)=\"changeUpdate($event,'after')\"\n                      [choice_modal]=\"'date'\"\n                      [format]=\"'YYYY-MM-DD'\"\n                    ></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n            </at-form-item>\n          </div>\n        </div>\n      </div>\n\n      <div at-col [span]=\"24\">\n        <div style=\"margin-bottom: 24px\">\n          <button at-button (click)=\"search()\" [atType]=\"'primary'\">\n            <span><tt-i18n [t]=\"'Button.search'\"></tt-i18n></span>\n          </button>\n          <at-divider [vertical]=\"true\" [height]=\"20\"></at-divider>\n          <button at-button (click)=\"reset()\" [atType]=\"'primary'\" hollow>\n        <span>\n        <tt-i18n [t]=\"'Button.reset'\"></tt-i18n>\n      </span>\n          </button>\n          <ng-template [ngTemplateOutlet]=\"buttons\" ></ng-template>\n        </div>\n      </div>\n    </div>\n    <!--<div at-row class=\"filter-container\">-->\n    <!--<at-dropdown [trigger]=\"'click'\" [autoClose]=\"false\">-->\n    <!--<button at-dropdown at-button><span>\u7B5B\u9009\u5217\u8868</span></button>-->\n    <!--<ul at-drop-menu-list>-->\n    <!--<li at-drop-menu-item *ngFor=\"let item of search_columns\">-->\n    <!--{{ (\"Model.\" + item.name) | I18n | async}}-->\n    <!--</li>-->\n    <!--</ul>-->\n    <!--</at-dropdown>-->\n    <!--</div>-->\n  ",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return SearchGroupComponent; })),
                            multi: true
                        }],
                    styles: [".middle-line{padding-top:12px}"]
                }] }
    ];
    /** @nocollapse */
    SearchGroupComponent.ctorParameters = function () { return []; };
    SearchGroupComponent.propDecorators = {
        search_columns: [{ type: Input }],
        extra_form: [{ type: Input }],
        onSearch: [{ type: Output }],
        buttons: [{ type: Input }],
        extra_search: [{ type: Input }]
    };
    return SearchGroupComponent;
}());
export { SearchGroupComponent };
if (false) {
    /** @type {?} */
    SearchGroupComponent.prototype.search_columns;
    /** @type {?} */
    SearchGroupComponent.prototype.extra_form;
    /** @type {?} */
    SearchGroupComponent.prototype.search_params;
    /** @type {?} */
    SearchGroupComponent.prototype.onSearch;
    /** @type {?} */
    SearchGroupComponent.prototype.buttons;
    /** @type {?} */
    SearchGroupComponent.prototype.extra_search;
    /** @type {?} */
    SearchGroupComponent.prototype.created_at_before;
    /** @type {?} */
    SearchGroupComponent.prototype.created_at_after;
    /** @type {?} */
    SearchGroupComponent.prototype.updated_at_before;
    /** @type {?} */
    SearchGroupComponent.prototype.updated_at_after;
    /** @type {?} */
    SearchGroupComponent.prototype.show_more;
    /** @type {?} */
    SearchGroupComponent.prototype.range_keys;
    /** @type {?} */
    SearchGroupComponent.prototype.onChange;
    /** @type {?} */
    SearchGroupComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXR0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWFyY2gtZ3JvdXAvc2VhcmNoLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHcEQsa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDJCQUFZOztJQUNaLDRCQUE0Qzs7SUFDNUMsbUNBQTRIOztJQUM1SCw2QkFBZ0I7O0lBQ2hCLGdDQUFrQjs7OztJQUVsQixzREFBc0I7O0FBR3hCO0lBc01FO1FBekJBLG1CQUFjLEdBQW9CLEVBQUUsQ0FBQztRQUlyQyxrQkFBYSxHQUE0QixFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFPakQsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUV0QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFdkIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUtoQixhQUFROzs7UUFBNkMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDaEUsY0FBUzs7O1FBQWUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7SUFIbkMsQ0FBQzs7Ozs7SUFLRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBc0M7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxF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U0FwRlksb0JBQW9COzs7SUFFL0IsOENBQ3FDOztJQUVyQywwQ0FBdUM7O0lBRXZDLDZDQUE0Qzs7SUFFNUMsd0NBQWlEOztJQUdqRCx1Q0FBa0Q7O0lBRWxELDRDQUF1RDs7SUFFdkQsaURBQXVCOztJQUV2QixnREFBc0I7O0lBRXRCLGlEQUF1Qjs7SUFFdkIsZ0RBQXNCOztJQUV0Qix5Q0FBa0I7O0lBRWxCLDBDQUFnQjs7SUFLaEIsd0NBQWdFOztJQUNoRSx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi8uLi9oZWxwZXIvZGF0YS1jaGVrZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaENvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIHR5cGU6ICdpbnB1dCcgfCAnc2VsZWN0JyB8ICdkYXRlJyB8ICdyYW5nZSc7XG4gIGRhdGFfc291cmNlPzogQXJyYXk8eyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfT4gfCBPYnNlcnZhYmxlPEFycmF5PHsgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIH0+PjtcbiAgYXN5bmM/OiBib29sZWFuO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcblxuICBjaGFuZ2VBY3Rpb24/KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R0LXNlYXJjaC1ncm91cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBhdC1yb3cgY2xhc3M9XCJzZWFyY2gtYmFyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWFyY2hfY29sdW1ucztsZXQgaSA9aW5kZXhcIiBhdC1jb2wgW3NwYW5dPVwiaXRlbS50eXBlID09PSdyYW5nZSc/IDExIDogNVwiXG4gICAgICAgICAgIFtvZmZzZXRdPVwiICgoaSkgJSA0KSA9PSAwID8gMCA6IDFcIj5cbiAgICAgICAgPGF0LWZvcm0taXRlbT5cbiAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiIGNsYXNzPVwic2VhcmNoLWxhYmVsXCI+XG4gICAgICAgICAgICB7eyAoXCJNb2RlbC5cIiArIGl0ZW0ubmFtZSkgfCBJMThuIHwgYXN5bmN9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhdC1mb3JtLWNvbnRyb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIml0ZW0udHlwZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2lucHV0J1wiIGF0LWlucHV0XG4gICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlYXJjaF9wYXJhbXNbJ3NlYXJjaFtsaWtlXycraXRlbS5rZXkgKyddJ11cIj5cbiAgICAgICAgICAgICAgPGF0SW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXRUeXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zWydzZWFyY2hbJytpdGVtLmtleSArJ10nXVwiPlxuICAgICAgICAgICAgICA8L2F0SW5wdXQ+XG4gICAgICAgICAgICAgIDxhdC1zZWxlY3QgW211bHRpcGxlXT1cIml0ZW0ubXVsdGlwbGVcIiBbKG5nTW9kZWwpXT1cInNlYXJjaF9wYXJhbXNbJ3NlYXJjaFsnK2l0ZW0ua2V5ICsnXSddXCIgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAyOTBweFwiPlxuICAgICAgICAgICAgICAgIDxhdC1vcHRpb24gW2F0TGFiZWxdPVwiJ0RhdGFTb3VyY2UuYWxsJyB8IEkxOG4gfCBhc3luY1wiIFthdFZhbHVlXT1cIicnXCI+PC9hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPGF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mICBpdGVtLmFzeW5jID8gKGl0ZW0uZGF0YV9zb3VyY2UgfCBhc3luYykgOiBpdGVtLmRhdGFfc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdExhYmVsXT1cIm9wdGlvbi5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdFZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDwvYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8L2F0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3JhbmdlJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgYXQtcm93PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0RGF0ZXRpbWVQaWNrZXIgW25nTW9kZWxdPVwicmFuZ2Vfa2V5c1tpdGVtLmtleV0/LmJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFJhbmdlKCRldmVudCxpdGVtLmtleSwnYmVmb3JlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREIEhIOm1tOnNzJ1wiPjwvYXREYXRldGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMVwiIHN0eWxlPVwiICBsZWZ0OiAxJTtwb3NpdGlvbjogcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW2hlaWdodF09XCIzXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiIFtvZmZzZXRdPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlciBbbmdNb2RlbF09XCJyYW5nZV9rZXlzW2l0ZW0ua2V5XT8uYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJY29uXT1cIidjYWxlbmRhcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRSYW5nZSgkZXZlbnQsaXRlbS5rZXksJ2FmdGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREIEhIOm1tOnNzJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlRGF0ZV09XCJyYW5nZV9rZXlzW2l0ZW0ua2V5XT8uYmVmb3JlXCI+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9hdC1mb3JtLWNvbnRyb2w+XG4gICAgICAgIDwvYXQtZm9ybS1pdGVtPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYV9zZWFyY2hcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDI0cHhcIj5cbiAgICAgICAgICA8YXQtY2hlY2tib3ggW2xhYmVsXT1cIidCdXR0b24ubW9yZV9maWx0ZXInIHwgSTE4biB8IGFzeW5jXCIgWyhuZ01vZGVsKV09XCJzaG93X21vcmVcIj5cbiAgICAgICAgICA8L2F0LWNoZWNrYm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cInNob3dfbW9yZVwiIGF0LWNvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiPlxuICAgICAgICAgICAgPGF0LWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCIgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi5jcmVhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjcmVhdGVkX2F0X2JlZm9yZVwiIFtmb3JtYXRdPVwiJ1lZWVktTU0tREQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDcmVhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiPjwvYXREYXRldGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvYXQtZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMlwiIGNsYXNzPVwibWlkZGxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8YXQtZGl2aWRlciBbaGVpZ2h0XT1cIjNcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgYXQtcm93PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIiBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuQ29tbW9uLmNyZWF0ZWRfYXQnXCI+PC90dC1pMThuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YXQtZm9ybS1jb250cm9sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdERhdGV0aW1lUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWNvbl09XCInY2FsZW5kYXInXCJcbiAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNyZWF0ZWRfYXRfYWZ0ZXJcIiBbZGlzYWJsZURhdGVdPVwiY3JlYXRlZF9hdF9iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUNyZWF0ZSgkZXZlbnQsJ2FmdGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjaG9pY2VfbW9kYWxdPVwiJ2RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgID48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2F0LWZvcm0taXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiIFtvZmZzZXRdPVwiMVwiPlxuICAgICAgICAgICAgPGF0LWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCIgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi51cGRhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1cGRhdGVkX2F0X2JlZm9yZVwiIFtmb3JtYXRdPVwiJ1lZWVktTU0tREQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VVcGRhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiPjwvYXREYXRldGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvYXQtZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMlwiIGNsYXNzPVwibWlkZGxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8YXQtZGl2aWRlciBbaGVpZ2h0XT1cIjNcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgYXQtcm93PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIiBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuQ29tbW9uLnVwZGF0ZWRfYXQnXCI+PC90dC1pMThuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YXQtZm9ybS1jb250cm9sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdERhdGV0aW1lUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWNvbl09XCInY2FsZW5kYXInXCJcbiAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVwZGF0ZWRfYXRfYWZ0ZXJcIiBbZGlzYWJsZURhdGVdPVwidXBkYXRlZF9hdF9iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVVwZGF0ZSgkZXZlbnQsJ2FmdGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjaG9pY2VfbW9kYWxdPVwiJ2RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgID48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2F0LWZvcm0taXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDI0cHhcIj5cbiAgICAgICAgICA8YnV0dG9uIGF0LWJ1dHRvbiAoY2xpY2spPVwic2VhcmNoKClcIiBbYXRUeXBlXT1cIidwcmltYXJ5J1wiPlxuICAgICAgICAgICAgPHNwYW4+PHR0LWkxOG4gW3RdPVwiJ0J1dHRvbi5zZWFyY2gnXCI+PC90dC1pMThuPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiIFtoZWlnaHRdPVwiMjBcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgPGJ1dHRvbiBhdC1idXR0b24gKGNsaWNrKT1cInJlc2V0KClcIiBbYXRUeXBlXT1cIidwcmltYXJ5J1wiIGhvbGxvdz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgIDx0dC1pMThuIFt0XT1cIidCdXR0b24ucmVzZXQnXCI+PC90dC1pMThuPlxuICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25zXCIgPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLTxkaXYgYXQtcm93IGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiPi0tPlxuICAgIDwhLS08YXQtZHJvcGRvd24gW3RyaWdnZXJdPVwiJ2NsaWNrJ1wiIFthdXRvQ2xvc2VdPVwiZmFsc2VcIj4tLT5cbiAgICA8IS0tPGJ1dHRvbiBhdC1kcm9wZG93biBhdC1idXR0b24+PHNwYW4+562b6YCJ5YiX6KGoPC9zcGFuPjwvYnV0dG9uPi0tPlxuICAgIDwhLS08dWwgYXQtZHJvcC1tZW51LWxpc3Q+LS0+XG4gICAgPCEtLTxsaSBhdC1kcm9wLW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWFyY2hfY29sdW1uc1wiPi0tPlxuICAgIDwhLS17eyAoXCJNb2RlbC5cIiArIGl0ZW0ubmFtZSkgfCBJMThuIHwgYXN5bmN9fS0tPlxuICAgIDwhLS08L2xpPi0tPlxuICAgIDwhLS08L3VsPi0tPlxuICAgIDwhLS08L2F0LWRyb3Bkb3duPi0tPlxuICAgIDwhLS08L2Rpdj4tLT5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlYXJjaEdyb3VwQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XSxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWdyb3VwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKVxuICBzZWFyY2hfY29sdW1uczogU2VhcmNoQ29sdW1uIFtdID0gW107XG5cbiAgQElucHV0KCkgZXh0cmFfZm9ybTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgc2VhcmNoX3BhcmFtczogeyBbeDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBidXR0b25zOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGV4dHJhX3NlYXJjaDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcblxuICBjcmVhdGVkX2F0X2JlZm9yZSA9ICcnO1xuXG4gIGNyZWF0ZWRfYXRfYWZ0ZXIgPSAnJztcblxuICB1cGRhdGVkX2F0X2JlZm9yZSA9ICcnO1xuXG4gIHVwZGF0ZWRfYXRfYWZ0ZXIgPSAnJztcblxuICBzaG93X21vcmUgPSBmYWxzZTtcblxuICByYW5nZV9rZXlzID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBvbkNoYW5nZTogKHZhbHVlOiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHsgW3g6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogeyBbeDogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBpZiAoaXNOb3ROaWwob2JqKSkge1xuICAgICAgdGhpcy5zZWFyY2hfcGFyYW1zID0gb2JqO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2guZW1pdCgpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hfcGFyYW1zID0ge307XG4gICAgdGhpcy5jcmVhdGVkX2F0X2JlZm9yZSA9ICcnO1xuICAgIHRoaXMuY3JlYXRlZF9hdF9hZnRlciA9ICcnO1xuICAgIHRoaXMudXBkYXRlZF9hdF9iZWZvcmUgPSAnJztcbiAgICB0aGlzLnVwZGF0ZWRfYXRfYWZ0ZXIgPSAnJztcbiAgICB0aGlzLnJhbmdlX2tleXMgPSB7fTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VhcmNoX3BhcmFtcyk7XG5cbiAgfVxuXG4gIGNoYW5nZUNyZWF0ZSgkZXZlbnQ6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtc1snc2VhcmNoW2JldHdlZW5fY3JlYXRlZF9hdF0nXSA9IGAke3RoaXMuY3JlYXRlZF9hdF9iZWZvcmV9LCR7dGhpcy5jcmVhdGVkX2F0X2FmdGVyfWA7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuICB9XG5cbiAgY2hhbmdlVXBkYXRlKCRldmVudDogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hfcGFyYW1zWydzZWFyY2hbYmV0d2Vlbl91cGRhdGVkX2F0XSddID0gYCR7dGhpcy51cGRhdGVkX2F0X2JlZm9yZX0sJHt0aGlzLnVwZGF0ZWRfYXRfYWZ0ZXJ9YDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VhcmNoX3BhcmFtcyk7XG4gIH1cblxuICBzZXRSYW5nZSh2YWx1ZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yYW5nZV9rZXlzW2tleV0pIHtcbiAgICAgIHRoaXMucmFuZ2Vfa2V5c1trZXldID0ge2JlZm9yZTogJycsIGFmdGVyOiAnJ307XG4gICAgfVxuICAgIHRoaXMucmFuZ2Vfa2V5c1trZXldW2FmdGVyXSA9IHZhbHVlO1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtc1tgc2VhcmNoW2JldHdlZW5fJHtrZXl9XWBdID0gYCR7dGhpcy5yYW5nZV9rZXlzW2tleV0uYmVmb3JlfSAsICR7dGhpcy5yYW5nZV9rZXlzW2tleV0uYWZ0ZXJ9YDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VhcmNoX3BhcmFtcyk7XG4gIH1cbn1cbiJdfQ==