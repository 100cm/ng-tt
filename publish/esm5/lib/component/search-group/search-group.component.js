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
        // tslint:disable-next-line:no-any
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.show_more = false;
        this.range_keys = {};
        this.edit_params = {};
        this.visible = false;
        this.edit_columns = [];
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
    SearchGroupComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.visible = false;
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
     * @return {?}
     */
    SearchGroupComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.visible = true;
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
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.batchUpdate = /**
     * @return {?}
     */
    function () {
        this.update.emit(this.edit_params);
        this.visible = false;
    };
    /**
     * @return {?}
     */
    SearchGroupComponent.prototype.batchDelete = /**
     * @return {?}
     */
    function () {
        this.delete.emit();
    };
    SearchGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-search-group',
                    template: "\n    <div at-row class=\"search-bar-container\">\n      <ng-template [ngTemplateOutlet]=\"search_template\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"extra_search\"></ng-template>\n      <div at-col [span]=\"24\">\n        <div style=\"margin-bottom: 24px\">\n          <at-checkbox [label]=\"'Button.more_filter' | I18n | async\" [(ngModel)]=\"show_more\">\n          </at-checkbox>\n        </div>\n      </div>\n      <div *ngIf=\"show_more\" at-col [span]=\"24\">\n        <div at-row>\n          <div at-col [span]=\"11\">\n            <at-form-item>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col [span]=\"24\" class=\"search-label\">\n                    <tt-i18n [t]=\"'Model.Common.created_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"created_at_before\" [format]=\"'YYYY-MM-DD'\"\n                      (ngModelChange)=\"changeCreate($event,'after')\"\n                      [choice_modal]=\"'date'\"></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n              <div at-col [span]=\"2\" class=\"middle-line\">\n                <at-divider [height]=\"3\"></at-divider>\n              </div>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col class=\"search-label\" [span]=\"24\">\n                    <tt-i18n [t]=\"'Model.Common.created_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"created_at_after\" [disableDate]=\"created_at_before\"\n                      (ngModelChange)=\"changeCreate($event,'after')\"\n                      [choice_modal]=\"'date'\"\n                      [format]=\"'YYYY-MM-DD'\"\n                    ></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n            </at-form-item>\n          </div>\n          <div at-col [span]=\"11\" [offset]=\"1\">\n            <at-form-item>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col [span]=\"24\" class=\"search-label\">\n                    <tt-i18n [t]=\"'Model.Common.updated_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"updated_at_before\" [format]=\"'YYYY-MM-DD'\"\n                      (ngModelChange)=\"changeUpdate($event,'after')\"\n                      [choice_modal]=\"'date'\"></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n              <div at-col [span]=\"2\" class=\"middle-line\">\n                <at-divider [height]=\"3\"></at-divider>\n              </div>\n              <div at-col [span]=\"11\">\n                <div at-row>\n                  <div at-col class=\"search-label\" [span]=\"24\">\n                    <tt-i18n [t]=\"'Model.Common.updated_at'\"></tt-i18n>\n                  </div>\n                  <at-form-control [span]=\"24\">\n                    <atDatetimePicker\n                      [inputIcon]=\"'calendar'\"\n                      [(ngModel)]=\"updated_at_after\" [disableDate]=\"updated_at_before\"\n                      (ngModelChange)=\"changeUpdate($event,'after')\"\n                      [choice_modal]=\"'date'\"\n                      [format]=\"'YYYY-MM-DD'\"\n                    ></atDatetimePicker>\n                  </at-form-control>\n                </div>\n              </div>\n            </at-form-item>\n          </div>\n        </div>\n      </div>\n\n      <div at-col [span]=\"24\">\n        <div style=\"margin-bottom: 24px\">\n          <button at-button (click)=\"search()\" [atType]=\"'primary'\">\n            <span><tt-i18n [t]=\"'Button.search'\"></tt-i18n></span>\n          </button>\n          <at-divider [vertical]=\"true\" [height]=\"20\"></at-divider>\n          <button at-button (click)=\"reset()\" [atType]=\"'primary'\" hollow>\n            <span>\n        <tt-i18n [t]=\"'Button.reset'\"></tt-i18n>\n      </span>\n          </button>\n          <at-divider [vertical]=\"true\" [height]=\"20\"></at-divider>\n          <button at-button (click)=\"edit()\" [atType]=\"'primary'\">\n            <span>\u6279\u91CF\u7F16\u8F91</span>\n          </button>\n          <ng-template [ngTemplateOutlet]=\"buttons\"></ng-template>\n        </div>\n      </div>\n    </div>\n    <!--<div at-row class=\"filter-container\">-->\n    <!--<at-dropdown [trigger]=\"'click'\" [autoClose]=\"false\">-->\n    <!--<button at-dropdown at-button><span>\u7B5B\u9009\u5217\u8868</span></button>-->\n    <!--<ul at-drop-menu-list>-->\n    <!--<li at-drop-menu-item *ngFor=\"let item of search_columns\">-->\n    <!--{{ (\"Model.\" + item.name) | I18n | async}}-->\n    <!--</li>-->\n    <!--</ul>-->\n    <!--</at-dropdown>-->\n    <!--</div>-->\n\n    <at-drawer [atClosable]=\"true\" [atVisible]=\"visible\" (atOnClose)=\"close()\" atPlacement=\"right\" [atTitle]=\"drawer_title\" [atWidth]=\"320\">\n      <ng-template [ngTemplateOutlet]=\"edit_template\"></ng-template>\n    </at-drawer>\n    <ng-template #drawer_title>\n      <button at-button (click)=\"batchUpdate()\" [atType]=\"'primary'\"> \u6279\u91CF\u66F4\u65B0</button>\n      <!--<at-divider [vertical]=\"true\" [height]=\"20\"></at-divider>-->\n      <!--<button at-button (click)=\"batchDelete()\" [atType]=\"'error'\" hollow> \u6279\u91CF\u5220\u9664</button>-->\n    </ng-template>\n\n    <ng-template #search_template let-item let-bind=\"bind\">\n      <div *ngFor=\"let item of search_columns;let i =index\" at-col [span]=\"item.type ==='range'? 11 : 5\"\n           [offset]=\" ((i) % 4) == 0 ? 0 : 1\">\n        <at-form-item>\n          <div at-col [span]=\"24\" class=\"search-label\">\n            {{ (\"Model.\" + item.name) | I18n | async}}\n          </div>\n          <at-form-control [span]=\"24\">\n            <ng-container [ngSwitch]=\"item.type\">\n              <input class=\"search-input\" *ngSwitchCase=\"'input'\" at-input\n                     [(ngModel)]=\"search_params['search[like_'+item.key +']']\">\n              <atInput class=\"search-input\" *ngSwitchCase=\"'number'\"\n                       [atType]=\"'number'\"\n                       [(ngModel)]=\"search_params['search['+item.key +']']\">\n              </atInput>\n              <at-select [multiple]=\"item.multiple\" [(ngModel)]=\"search_params['search['+item.key +']'+ (item.multiple ? '[]' : '')]\"\n                         *ngSwitchCase=\"'select'\"\n                         style=\"width: 290px\">\n                <at-option *ngIf=\"!item.multiple\" [atLabel]=\"'DataSource.all' | I18n | async\" [atValue]=\"''\"></at-option>\n                <at-option *ngFor=\"let option of  item.async ? (item.data_source | async) : item.data_source\"\n                           [atLabel]=\"option.name\"\n                           [atValue]=\"option.value\">\n                </at-option>\n              </at-select>\n              <ng-container *ngSwitchCase=\"'range'\">\n                <div at-row>\n                  <div at-col [span]=\"11\">\n                    <atDatetimePicker [ngModel]=\"range_keys[item.key]?.before\"\n                                      [inputIcon]=\"'calendar'\"\n                                      (ngModelChange)=\"setRange($event,item.key,'before')\"\n                                      [format]=\"'YYYY-MM-DD HH:mm:ss'\"></atDatetimePicker>\n                  </div>\n                  <div at-col [span]=\"1\" style=\"  left: 1%;position: relative\">\n                    <at-divider [height]=\"3\"></at-divider>\n                  </div>\n                  <div at-col [span]=\"11\" [offset]=\"1\">\n                    <atDatetimePicker [ngModel]=\"range_keys[item.key]?.after\"\n                                      [inputIcon]=\"'calendar'\"\n                                      (ngModelChange)=\"setRange($event,item.key,'after')\"\n                                      [format]=\"'YYYY-MM-DD HH:mm:ss'\"\n                                      [disableDate]=\"range_keys[item.key]?.before\"></atDatetimePicker>\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </at-form-control>\n        </at-form-item>\n\n      </div>\n    </ng-template>\n\n    <ng-template #edit_template let-item let-bind=\"bind\">\n      <div *ngFor=\"let item of edit_columns;let i =index\" at-col [span]=\"24\">\n        <at-form-item>\n          <div at-col [span]=\"24\" class=\"search-label\">\n            {{ (\"Model.\" + item.name) | I18n | async}}\n          </div>\n          <at-form-control [span]=\"24\">\n            <ng-container [ngSwitch]=\"item.type\">\n              <input class=\"search-input\" *ngSwitchCase=\"'input'\" at-input\n                     [(ngModel)]=\"edit_params[item.key]\">\n              <atInput class=\"search-input\" *ngSwitchCase=\"'number'\"\n                       [atType]=\"'number'\"\n                       [(ngModel)]=\"edit_params[item.key]\">\n              </atInput>\n              <at-select [multiple]=\"item.multiple\" [(ngModel)]=\"edit_params[item.key]\" *ngSwitchCase=\"'select'\"\n                         style=\"width: 290px\">\n                <at-option *ngIf=\"!item.multiple\" [atLabel]=\"'DataSource.all' | I18n | async\" [atValue]=\"''\"></at-option>\n                <at-option *ngFor=\"let option of  item.async ? (item.data_source | async) : item.data_source\"\n                           [atLabel]=\"option.name\"\n                           [atValue]=\"option.value\">\n                </at-option>\n              </at-select>\n              <ng-container *ngSwitchCase=\"'date'\">\n                <div at-row>\n                  <div at-col [span]=\"24\">\n                    <atDatetimePicker [(ngModel)]=\"edit_params[item.key]\"\n                                      [inputIcon]=\"'calendar'\"\n                                      [format]=\"'YYYY-MM-DD HH:mm:ss'\"></atDatetimePicker>\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </at-form-control>\n        </at-form-item>\n\n      </div>\n    </ng-template>\n  ",
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
        extra_search: [{ type: Input }],
        update: [{ type: Output }],
        delete: [{ type: Output }],
        edit_columns: [{ type: Input }]
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
    SearchGroupComponent.prototype.update;
    /** @type {?} */
    SearchGroupComponent.prototype.delete;
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
    SearchGroupComponent.prototype.edit_params;
    /** @type {?} */
    SearchGroupComponent.prototype.visible;
    /** @type {?} */
    SearchGroupComponent.prototype.edit_columns;
    /** @type {?} */
    SearchGroupComponent.prototype.onChange;
    /** @type {?} */
    SearchGroupComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXR0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWFyY2gtZ3JvdXAvc2VhcmNoLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHcEQsa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDJCQUFZOztJQUNaLDRCQUE0Qzs7SUFDNUMsbUNBQTRIOztJQUM1SCw2QkFBZ0I7O0lBQ2hCLGdDQUFrQjs7OztJQUVsQixzREFBc0I7O0FBR3hCO0lBcVFFO1FBaENBLG1CQUFjLEdBQW9CLEVBQUUsQ0FBQztRQUlyQyxrQkFBYSxHQUE0QixFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBUTlCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkUsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUV0QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFdkIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUtqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUVuQyxhQUFROzs7UUFBNkMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7UUFDaEUsY0FBUzs7O1FBQWUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUM7SUFSbkMsQ0FBQzs7Ozs7SUFVRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBc0M7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxHQUE0QjtRQUNyQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQscUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFcEMsQ0FBQzs7OztJQUVELG1DQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVELDJDQUFZOzs7OztJQUFaLFVBQWEsTUFBYyxFQUFFLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFNLElBQUksQ0FBQyxpQkFBaUIsU0FBSSxJQUFJLENBQUMsZ0JBQWtCLENBQUM7UUFDeEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBRUQsMkNBQVk7Ozs7O0lBQVosVUFBYSxNQUFjLEVBQUUsS0FBYTtRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLEdBQU0sSUFBSSxDQUFDLGlCQUFpQixTQUFJLElBQUksQ0FBQyxnQkFBa0IsQ0FBQztRQUN4RyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7O0lBRUQsdUNBQVE7Ozs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQWtCLEdBQUcsTUFBRyxDQUFDLEdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFPLENBQUM7UUFDaEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFsVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxvNlVBd05UO29CQUNELFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDOzRCQUNuRCxLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDOztpQkFFSDs7Ozs7aUNBR0UsS0FBSzs2QkFHTCxLQUFLOzJCQUlMLE1BQU07MEJBR04sS0FBSzsrQkFFTCxLQUFLO3lCQUdMLE1BQU07eUJBRU4sTUFBTTsrQkFxQk4sS0FBSzs7SUF5RVIsMkJBQUM7Q0FBQSxBQW5WRCxJQW1WQztTQWpIWSxvQkFBb0I7OztJQUUvQiw4Q0FDcUM7O0lBRXJDLDBDQUF1Qzs7SUFFdkMsNkNBQTRDOztJQUU1Qyx3Q0FBaUQ7O0lBR2pELHVDQUFrRDs7SUFFbEQsNENBQXVEOztJQUd2RCxzQ0FBa0U7O0lBRWxFLHNDQUFtRTs7SUFFbkUsaURBQXVCOztJQUV2QixnREFBc0I7O0lBRXRCLGlEQUF1Qjs7SUFFdkIsZ0RBQXNCOztJQUV0Qix5Q0FBa0I7O0lBRWxCLDBDQUFnQjs7SUFFaEIsMkNBQWlCOztJQUtqQix1Q0FBZ0I7O0lBRWhCLDRDQUNtQzs7SUFFbkMsd0NBQWdFOztJQUNoRSx5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi8uLi9oZWxwZXIvZGF0YS1jaGVrZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaENvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIHR5cGU6ICdpbnB1dCcgfCAnc2VsZWN0JyB8ICdkYXRlJyB8ICdyYW5nZSc7XG4gIGRhdGFfc291cmNlPzogQXJyYXk8eyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfT4gfCBPYnNlcnZhYmxlPEFycmF5PHsgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIH0+PjtcbiAgYXN5bmM/OiBib29sZWFuO1xuICBtdWx0aXBsZTogYm9vbGVhbjtcblxuICBjaGFuZ2VBY3Rpb24/KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R0LXNlYXJjaC1ncm91cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBhdC1yb3cgY2xhc3M9XCJzZWFyY2gtYmFyLWNvbnRhaW5lclwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlYXJjaF90ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXh0cmFfc2VhcmNoXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyNHB4XCI+XG4gICAgICAgICAgPGF0LWNoZWNrYm94IFtsYWJlbF09XCInQnV0dG9uLm1vcmVfZmlsdGVyJyB8IEkxOG4gfCBhc3luY1wiIFsobmdNb2RlbCldPVwic2hvd19tb3JlXCI+XG4gICAgICAgICAgPC9hdC1jaGVja2JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJzaG93X21vcmVcIiBhdC1jb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgIDxhdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjExXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiIGNsYXNzPVwic2VhcmNoLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC5Db21tb24uY3JlYXRlZF9hdCdcIj48L3R0LWkxOG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhdC1mb3JtLWNvbnRyb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0RGF0ZXRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJY29uXT1cIidjYWxlbmRhcidcIlxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3JlYXRlZF9hdF9iZWZvcmVcIiBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlQ3JlYXRlKCRldmVudCwnYWZ0ZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Nob2ljZV9tb2RhbF09XCInZGF0ZSdcIj48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjJcIiBjbGFzcz1cIm1pZGRsZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW2hlaWdodF09XCIzXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIGNsYXNzPVwic2VhcmNoLWxhYmVsXCIgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi5jcmVhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjcmVhdGVkX2F0X2FmdGVyXCIgW2Rpc2FibGVEYXRlXT1cImNyZWF0ZWRfYXRfYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDcmVhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCInWVlZWS1NTS1ERCdcIlxuICAgICAgICAgICAgICAgICAgICA+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9hdC1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIiBbb2Zmc2V0XT1cIjFcIj5cbiAgICAgICAgICAgIDxhdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjExXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiIGNsYXNzPVwic2VhcmNoLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC5Db21tb24udXBkYXRlZF9hdCdcIj48L3R0LWkxOG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhdC1mb3JtLWNvbnRyb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0RGF0ZXRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJY29uXT1cIidjYWxlbmRhcidcIlxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXBkYXRlZF9hdF9iZWZvcmVcIiBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlVXBkYXRlKCRldmVudCwnYWZ0ZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Nob2ljZV9tb2RhbF09XCInZGF0ZSdcIj48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjJcIiBjbGFzcz1cIm1pZGRsZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW2hlaWdodF09XCIzXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIGNsYXNzPVwic2VhcmNoLWxhYmVsXCIgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi51cGRhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1cGRhdGVkX2F0X2FmdGVyXCIgW2Rpc2FibGVEYXRlXT1cInVwZGF0ZWRfYXRfYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VVcGRhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCInWVlZWS1NTS1ERCdcIlxuICAgICAgICAgICAgICAgICAgICA+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9hdC1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyNHB4XCI+XG4gICAgICAgICAgPGJ1dHRvbiBhdC1idXR0b24gKGNsaWNrKT1cInNlYXJjaCgpXCIgW2F0VHlwZV09XCIncHJpbWFyeSdcIj5cbiAgICAgICAgICAgIDxzcGFuPjx0dC1pMThuIFt0XT1cIidCdXR0b24uc2VhcmNoJ1wiPjwvdHQtaTE4bj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIiBbaGVpZ2h0XT1cIjIwXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgIDxidXR0b24gYXQtYnV0dG9uIChjbGljayk9XCJyZXNldCgpXCIgW2F0VHlwZV09XCIncHJpbWFyeSdcIiBob2xsb3c+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ0J1dHRvbi5yZXNldCdcIj48L3R0LWkxOG4+XG4gICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIiBbaGVpZ2h0XT1cIjIwXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgIDxidXR0b24gYXQtYnV0dG9uIChjbGljayk9XCJlZGl0KClcIiBbYXRUeXBlXT1cIidwcmltYXJ5J1wiPlxuICAgICAgICAgICAgPHNwYW4+5om56YeP57yW6L6RPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25zXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tPGRpdiBhdC1yb3cgY2xhc3M9XCJmaWx0ZXItY29udGFpbmVyXCI+LS0+XG4gICAgPCEtLTxhdC1kcm9wZG93biBbdHJpZ2dlcl09XCInY2xpY2snXCIgW2F1dG9DbG9zZV09XCJmYWxzZVwiPi0tPlxuICAgIDwhLS08YnV0dG9uIGF0LWRyb3Bkb3duIGF0LWJ1dHRvbj48c3Bhbj7nrZvpgInliJfooag8L3NwYW4+PC9idXR0b24+LS0+XG4gICAgPCEtLTx1bCBhdC1kcm9wLW1lbnUtbGlzdD4tLT5cbiAgICA8IS0tPGxpIGF0LWRyb3AtbWVudS1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlYXJjaF9jb2x1bW5zXCI+LS0+XG4gICAgPCEtLXt7IChcIk1vZGVsLlwiICsgaXRlbS5uYW1lKSB8IEkxOG4gfCBhc3luY319LS0+XG4gICAgPCEtLTwvbGk+LS0+XG4gICAgPCEtLTwvdWw+LS0+XG4gICAgPCEtLTwvYXQtZHJvcGRvd24+LS0+XG4gICAgPCEtLTwvZGl2Pi0tPlxuXG4gICAgPGF0LWRyYXdlciBbYXRDbG9zYWJsZV09XCJ0cnVlXCIgW2F0VmlzaWJsZV09XCJ2aXNpYmxlXCIgKGF0T25DbG9zZSk9XCJjbG9zZSgpXCIgYXRQbGFjZW1lbnQ9XCJyaWdodFwiIFthdFRpdGxlXT1cImRyYXdlcl90aXRsZVwiIFthdFdpZHRoXT1cIjMyMFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImVkaXRfdGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvYXQtZHJhd2VyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZHJhd2VyX3RpdGxlPlxuICAgICAgPGJ1dHRvbiBhdC1idXR0b24gKGNsaWNrKT1cImJhdGNoVXBkYXRlKClcIiBbYXRUeXBlXT1cIidwcmltYXJ5J1wiPiDmibnph4/mm7TmlrA8L2J1dHRvbj5cbiAgICAgIDwhLS08YXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiIFtoZWlnaHRdPVwiMjBcIj48L2F0LWRpdmlkZXI+LS0+XG4gICAgICA8IS0tPGJ1dHRvbiBhdC1idXR0b24gKGNsaWNrKT1cImJhdGNoRGVsZXRlKClcIiBbYXRUeXBlXT1cIidlcnJvcidcIiBob2xsb3c+IOaJuemHj+WIoOmZpDwvYnV0dG9uPi0tPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI3NlYXJjaF90ZW1wbGF0ZSBsZXQtaXRlbSBsZXQtYmluZD1cImJpbmRcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VhcmNoX2NvbHVtbnM7bGV0IGkgPWluZGV4XCIgYXQtY29sIFtzcGFuXT1cIml0ZW0udHlwZSA9PT0ncmFuZ2UnPyAxMSA6IDVcIlxuICAgICAgICAgICBbb2Zmc2V0XT1cIiAoKGkpICUgNCkgPT0gMCA/IDAgOiAxXCI+XG4gICAgICAgIDxhdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMjRcIiBjbGFzcz1cInNlYXJjaC1sYWJlbFwiPlxuICAgICAgICAgICAge3sgKFwiTW9kZWwuXCIgKyBpdGVtLm5hbWUpIHwgSTE4biB8IGFzeW5jfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXQtZm9ybS1jb250cm9sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpdGVtLnR5cGVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgKm5nU3dpdGNoQ2FzZT1cIidpbnB1dCdcIiBhdC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zWydzZWFyY2hbbGlrZV8nK2l0ZW0ua2V5ICsnXSddXCI+XG4gICAgICAgICAgICAgIDxhdElucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F0VHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VhcmNoX3BhcmFtc1snc2VhcmNoWycraXRlbS5rZXkgKyddJ11cIj5cbiAgICAgICAgICAgICAgPC9hdElucHV0PlxuICAgICAgICAgICAgICA8YXQtc2VsZWN0IFttdWx0aXBsZV09XCJpdGVtLm11bHRpcGxlXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zWydzZWFyY2hbJytpdGVtLmtleSArJ10nKyAoaXRlbS5tdWx0aXBsZSA/ICdbXScgOiAnJyldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDI5MHB4XCI+XG4gICAgICAgICAgICAgICAgPGF0LW9wdGlvbiAqbmdJZj1cIiFpdGVtLm11bHRpcGxlXCIgW2F0TGFiZWxdPVwiJ0RhdGFTb3VyY2UuYWxsJyB8IEkxOG4gfCBhc3luY1wiIFthdFZhbHVlXT1cIicnXCI+PC9hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPGF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mICBpdGVtLmFzeW5jID8gKGl0ZW0uZGF0YV9zb3VyY2UgfCBhc3luYykgOiBpdGVtLmRhdGFfc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdExhYmVsXT1cIm9wdGlvbi5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdFZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDwvYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8L2F0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3JhbmdlJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgYXQtcm93PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0RGF0ZXRpbWVQaWNrZXIgW25nTW9kZWxdPVwicmFuZ2Vfa2V5c1tpdGVtLmtleV0/LmJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFJhbmdlKCRldmVudCxpdGVtLmtleSwnYmVmb3JlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREIEhIOm1tOnNzJ1wiPjwvYXREYXRldGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMVwiIHN0eWxlPVwiICBsZWZ0OiAxJTtwb3NpdGlvbjogcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW2hlaWdodF09XCIzXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiIFtvZmZzZXRdPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlciBbbmdNb2RlbF09XCJyYW5nZV9rZXlzW2l0ZW0ua2V5XT8uYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJY29uXT1cIidjYWxlbmRhcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRSYW5nZSgkZXZlbnQsaXRlbS5rZXksJ2FmdGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREIEhIOm1tOnNzJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlRGF0ZV09XCJyYW5nZV9rZXlzW2l0ZW0ua2V5XT8uYmVmb3JlXCI+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9hdC1mb3JtLWNvbnRyb2w+XG4gICAgICAgIDwvYXQtZm9ybS1pdGVtPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNlZGl0X3RlbXBsYXRlIGxldC1pdGVtIGxldC1iaW5kPVwiYmluZFwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBlZGl0X2NvbHVtbnM7bGV0IGkgPWluZGV4XCIgYXQtY29sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgIDxhdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMjRcIiBjbGFzcz1cInNlYXJjaC1sYWJlbFwiPlxuICAgICAgICAgICAge3sgKFwiTW9kZWwuXCIgKyBpdGVtLm5hbWUpIHwgSTE4biB8IGFzeW5jfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXQtZm9ybS1jb250cm9sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpdGVtLnR5cGVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgKm5nU3dpdGNoQ2FzZT1cIidpbnB1dCdcIiBhdC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJlZGl0X3BhcmFtc1tpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgPGF0SW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXRUeXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJlZGl0X3BhcmFtc1tpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgPC9hdElucHV0PlxuICAgICAgICAgICAgICA8YXQtc2VsZWN0IFttdWx0aXBsZV09XCJpdGVtLm11bHRpcGxlXCIgWyhuZ01vZGVsKV09XCJlZGl0X3BhcmFtc1tpdGVtLmtleV1cIiAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDI5MHB4XCI+XG4gICAgICAgICAgICAgICAgPGF0LW9wdGlvbiAqbmdJZj1cIiFpdGVtLm11bHRpcGxlXCIgW2F0TGFiZWxdPVwiJ0RhdGFTb3VyY2UuYWxsJyB8IEkxOG4gfCBhc3luY1wiIFthdFZhbHVlXT1cIicnXCI+PC9hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPGF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mICBpdGVtLmFzeW5jID8gKGl0ZW0uZGF0YV9zb3VyY2UgfCBhc3luYykgOiBpdGVtLmRhdGFfc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdExhYmVsXT1cIm9wdGlvbi5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdFZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDwvYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8L2F0LXNlbGVjdD5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlciBbKG5nTW9kZWwpXT1cImVkaXRfcGFyYW1zW2l0ZW0ua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRdPVwiJ1lZWVktTU0tREQgSEg6bW06c3MnXCI+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9hdC1mb3JtLWNvbnRyb2w+XG4gICAgICAgIDwvYXQtZm9ybS1pdGVtPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VhcmNoR3JvdXBDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG4gIH1dLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtZ3JvdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIEBJbnB1dCgpXG4gIHNlYXJjaF9jb2x1bW5zOiBTZWFyY2hDb2x1bW4gW10gPSBbXTtcblxuICBASW5wdXQoKSBleHRyYV9mb3JtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBzZWFyY2hfcGFyYW1zOiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGJ1dHRvbnM6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgZXh0cmFfc2VhcmNoOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHVwZGF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlbGV0ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNyZWF0ZWRfYXRfYmVmb3JlID0gJyc7XG5cbiAgY3JlYXRlZF9hdF9hZnRlciA9ICcnO1xuXG4gIHVwZGF0ZWRfYXRfYmVmb3JlID0gJyc7XG5cbiAgdXBkYXRlZF9hdF9hZnRlciA9ICcnO1xuXG4gIHNob3dfbW9yZSA9IGZhbHNlO1xuXG4gIHJhbmdlX2tleXMgPSB7fTtcblxuICBlZGl0X3BhcmFtcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgdmlzaWJsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGVkaXRfY29sdW1uczogU2VhcmNoQ29sdW1uIFtdID0gW107XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogeyBbeDogc3RyaW5nXTogc3RyaW5nIH0pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IHsgW3g6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gICAgaWYgKGlzTm90TmlsKG9iaikpIHtcbiAgICAgIHRoaXMuc2VhcmNoX3BhcmFtcyA9IG9iajtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hfcGFyYW1zID0ge307XG4gICAgdGhpcy5jcmVhdGVkX2F0X2JlZm9yZSA9ICcnO1xuICAgIHRoaXMuY3JlYXRlZF9hdF9hZnRlciA9ICcnO1xuICAgIHRoaXMudXBkYXRlZF9hdF9iZWZvcmUgPSAnJztcbiAgICB0aGlzLnVwZGF0ZWRfYXRfYWZ0ZXIgPSAnJztcbiAgICB0aGlzLnJhbmdlX2tleXMgPSB7fTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VhcmNoX3BhcmFtcyk7XG5cbiAgfVxuXG4gIGVkaXQoKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgfVxuXG4gIGNoYW5nZUNyZWF0ZSgkZXZlbnQ6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtc1snc2VhcmNoW2JldHdlZW5fY3JlYXRlZF9hdF0nXSA9IGAke3RoaXMuY3JlYXRlZF9hdF9iZWZvcmV9LCR7dGhpcy5jcmVhdGVkX2F0X2FmdGVyfWA7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuICB9XG5cbiAgY2hhbmdlVXBkYXRlKCRldmVudDogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hfcGFyYW1zWydzZWFyY2hbYmV0d2Vlbl91cGRhdGVkX2F0XSddID0gYCR7dGhpcy51cGRhdGVkX2F0X2JlZm9yZX0sJHt0aGlzLnVwZGF0ZWRfYXRfYWZ0ZXJ9YDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VhcmNoX3BhcmFtcyk7XG4gIH1cblxuICBzZXRSYW5nZSh2YWx1ZTogc3RyaW5nLCBrZXk6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yYW5nZV9rZXlzW2tleV0pIHtcbiAgICAgIHRoaXMucmFuZ2Vfa2V5c1trZXldID0ge2JlZm9yZTogJycsIGFmdGVyOiAnJ307XG4gICAgfVxuICAgIHRoaXMucmFuZ2Vfa2V5c1trZXldW2FmdGVyXSA9IHZhbHVlO1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtc1tgc2VhcmNoW2JldHdlZW5fJHtrZXl9XWBdID0gYCR7dGhpcy5yYW5nZV9rZXlzW2tleV0uYmVmb3JlfSAsICR7dGhpcy5yYW5nZV9rZXlzW2tleV0uYWZ0ZXJ9YDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VhcmNoX3BhcmFtcyk7XG4gIH1cblxuICBiYXRjaFVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuZWRpdF9wYXJhbXMpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgYmF0Y2hEZWxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGUuZW1pdCgpO1xuICB9XG59XG4iXX0=