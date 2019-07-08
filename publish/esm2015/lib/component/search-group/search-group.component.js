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
export class SearchGroupComponent {
    constructor() {
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
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (isNotNil(obj)) {
            this.search_params = obj;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    search() {
        this.onSearch.emit();
    }
    /**
     * @return {?}
     */
    reset() {
        this.search_params = {};
        this.created_at_before = '';
        this.created_at_after = '';
        this.updated_at_before = '';
        this.updated_at_after = '';
        this.range_keys = {};
        this.onChange(this.search_params);
    }
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    changeCreate($event, after) {
        this.search_params['search[between_created_at]'] = `${this.created_at_before},${this.created_at_after}`;
        this.onChange(this.search_params);
    }
    /**
     * @param {?} $event
     * @param {?} after
     * @return {?}
     */
    changeUpdate($event, after) {
        this.search_params['search[between_updated_at]'] = `${this.updated_at_before},${this.updated_at_after}`;
        this.onChange(this.search_params);
    }
    /**
     * @param {?} value
     * @param {?} key
     * @param {?} after
     * @return {?}
     */
    setRange(value, key, after) {
        if (!this.range_keys[key]) {
            this.range_keys[key] = { before: '', after: '' };
        }
        this.range_keys[key][after] = value;
        this.search_params[`search[between_${key}]`] = `${this.range_keys[key].before} , ${this.range_keys[key].after}`;
        this.onChange(this.search_params);
    }
}
SearchGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'tt-search-group',
                template: `
    <div at-row class="search-bar-container">
      <div *ngFor="let item of search_columns;let i =index" at-col [span]="item.type ==='range'? 11 : 5"
           [offset]=" ((i) % 4) == 0 ? 0 : 1">
        <at-form-item>
          <div at-col [span]="24" class="search-label">
            {{ ("Model." + item.name) | I18n | async}}
          </div>
          <at-form-control [span]="24">
            <ng-container [ngSwitch]="item.type">
              <input class="search-input" *ngSwitchCase="'input'" at-input
                     [(ngModel)]="search_params['search[like_'+item.key +']']">
              <atInput class="search-input" *ngSwitchCase="'number'"
                       [atType]="'number'"
                       [(ngModel)]="search_params['search['+item.key +']']">
              </atInput>
              <at-select [multiple]="item.multiple" [(ngModel)]="search_params['search['+item.key +']']" *ngSwitchCase="'select'"
                         style="width: 290px">
                <at-option [atLabel]="'DataSource.all' | I18n | async" [atValue]="''"></at-option>
                <at-option *ngFor="let option of  item.async ? (item.data_source | async) : item.data_source"
                           [atLabel]="option.name"
                           [atValue]="option.value">
                </at-option>
              </at-select>
              <ng-container *ngSwitchCase="'range'">
                <div at-row>
                  <div at-col [span]="11">
                    <atDatetimePicker [ngModel]="range_keys[item.key]?.before"
                                      [inputIcon]="'calendar'"
                                      (ngModelChange)="setRange($event,item.key,'before')"
                                      [format]="'YYYY-MM-DD HH:mm:ss'"></atDatetimePicker>
                  </div>
                  <div at-col [span]="1" style="  left: 1%;position: relative">
                    <at-divider [height]="3"></at-divider>
                  </div>
                  <div at-col [span]="11" [offset]="1">
                    <atDatetimePicker [ngModel]="range_keys[item.key]?.after"
                                      [inputIcon]="'calendar'"
                                      (ngModelChange)="setRange($event,item.key,'after')"
                                      [format]="'YYYY-MM-DD HH:mm:ss'"
                                      [disableDate]="range_keys[item.key]?.before"></atDatetimePicker>
                  </div>
                </div>
              </ng-container>
            </ng-container>
          </at-form-control>
        </at-form-item>

      </div>
      <ng-template [ngTemplateOutlet]="extra_search"></ng-template>
      <div at-col [span]="24">
        <div style="margin-bottom: 24px">
          <at-checkbox [label]="'Button.more_filter' | I18n | async" [(ngModel)]="show_more">
          </at-checkbox>
        </div>
      </div>
      <div *ngIf="show_more" at-col [span]="24">
        <div at-row>
          <div at-col [span]="11">
            <at-form-item>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col [span]="24" class="search-label">
                    <tt-i18n [t]="'Model.Common.created_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="created_at_before" [format]="'YYYY-MM-DD'"
                      (ngModelChange)="changeCreate($event,'after')"
                      [choice_modal]="'date'"></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
              <div at-col [span]="2" class="middle-line">
                <at-divider [height]="3"></at-divider>
              </div>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col class="search-label" [span]="24">
                    <tt-i18n [t]="'Model.Common.created_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="created_at_after" [disableDate]="created_at_before"
                      (ngModelChange)="changeCreate($event,'after')"
                      [choice_modal]="'date'"
                      [format]="'YYYY-MM-DD'"
                    ></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
            </at-form-item>
          </div>
          <div at-col [span]="11" [offset]="1">
            <at-form-item>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col [span]="24" class="search-label">
                    <tt-i18n [t]="'Model.Common.updated_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="updated_at_before" [format]="'YYYY-MM-DD'"
                      (ngModelChange)="changeUpdate($event,'after')"
                      [choice_modal]="'date'"></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
              <div at-col [span]="2" class="middle-line">
                <at-divider [height]="3"></at-divider>
              </div>
              <div at-col [span]="11">
                <div at-row>
                  <div at-col class="search-label" [span]="24">
                    <tt-i18n [t]="'Model.Common.updated_at'"></tt-i18n>
                  </div>
                  <at-form-control [span]="24">
                    <atDatetimePicker
                      [inputIcon]="'calendar'"
                      [(ngModel)]="updated_at_after" [disableDate]="updated_at_before"
                      (ngModelChange)="changeUpdate($event,'after')"
                      [choice_modal]="'date'"
                      [format]="'YYYY-MM-DD'"
                    ></atDatetimePicker>
                  </at-form-control>
                </div>
              </div>
            </at-form-item>
          </div>
        </div>
      </div>

      <div at-col [span]="24">
        <div style="margin-bottom: 24px">
          <button at-button (click)="search()" [atType]="'primary'">
            <span><tt-i18n [t]="'Button.search'"></tt-i18n></span>
          </button>
          <at-divider [vertical]="true" [height]="20"></at-divider>
          <button at-button (click)="reset()" [atType]="'primary'" hollow>
        <span>
        <tt-i18n [t]="'Button.reset'"></tt-i18n>
      </span>
          </button>
          <ng-template [ngTemplateOutlet]="buttons" ></ng-template>
        </div>
      </div>
    </div>
    <!--<div at-row class="filter-container">-->
    <!--<at-dropdown [trigger]="'click'" [autoClose]="false">-->
    <!--<button at-dropdown at-button><span>筛选列表</span></button>-->
    <!--<ul at-drop-menu-list>-->
    <!--<li at-drop-menu-item *ngFor="let item of search_columns">-->
    <!--{{ ("Model." + item.name) | I18n | async}}-->
    <!--</li>-->
    <!--</ul>-->
    <!--</at-dropdown>-->
    <!--</div>-->
  `,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => SearchGroupComponent)),
                        multi: true
                    }],
                styles: [".middle-line{padding-top:12px}"]
            }] }
];
/** @nocollapse */
SearchGroupComponent.ctorParameters = () => [];
SearchGroupComponent.propDecorators = {
    search_columns: [{ type: Input }],
    extra_form: [{ type: Input }],
    onSearch: [{ type: Output }],
    buttons: [{ type: Input }],
    extra_search: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXR0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWFyY2gtZ3JvdXAvc2VhcmNoLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHcEQsa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDJCQUFZOztJQUNaLDRCQUE0Qzs7SUFDNUMsbUNBQTRIOztJQUM1SCw2QkFBZ0I7O0lBQ2hCLGdDQUFrQjs7OztJQUVsQixzREFBc0I7O0FBNkt4QixNQUFNLE9BQU8sb0JBQW9CO0lBNEIvQjtRQXpCQSxtQkFBYyxHQUFvQixFQUFFLENBQUM7UUFJckMsa0JBQWEsR0FBNEIsRUFBRSxDQUFDO1FBRXpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBT2pELHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUV2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFLaEIsYUFBUTs7O1FBQTZDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUNoRSxjQUFTOzs7UUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUFIbkMsQ0FBQzs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxFQUFzQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVB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QUNaLENBQUM7O2FBRUg7Ozs7OzZCQUdFLEtBQUs7eUJBR0wsS0FBSzt1QkFJTCxNQUFNO3NCQUdOLEtBQUs7MkJBRUwsS0FBSzs7OztJQVpOLDhDQUNxQzs7SUFFckMsMENBQXVDOztJQUV2Qyw2Q0FBNEM7O0lBRTVDLHdDQUFpRDs7SUFHakQsdUNBQWtEOztJQUVsRCw0Q0FBdUQ7O0lBRXZELGlEQUF1Qjs7SUFFdkIsZ0RBQXNCOztJQUV0QixpREFBdUI7O0lBRXZCLGdEQUFzQjs7SUFFdEIseUNBQWtCOztJQUVsQiwwQ0FBZ0I7O0lBS2hCLHdDQUFnRTs7SUFDaEUseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vLi4vaGVscGVyL2RhdGEtY2hla2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xuICB0eXBlOiAnaW5wdXQnIHwgJ3NlbGVjdCcgfCAnZGF0ZScgfCAncmFuZ2UnO1xuICBkYXRhX3NvdXJjZT86IEFycmF5PHsgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIH0+IHwgT2JzZXJ2YWJsZTxBcnJheTx7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB9Pj47XG4gIGFzeW5jPzogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG5cbiAgY2hhbmdlQWN0aW9uPygpOiB2b2lkO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dC1zZWFyY2gtZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgYXQtcm93IGNsYXNzPVwic2VhcmNoLWJhci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VhcmNoX2NvbHVtbnM7bGV0IGkgPWluZGV4XCIgYXQtY29sIFtzcGFuXT1cIml0ZW0udHlwZSA9PT0ncmFuZ2UnPyAxMSA6IDVcIlxuICAgICAgICAgICBbb2Zmc2V0XT1cIiAoKGkpICUgNCkgPT0gMCA/IDAgOiAxXCI+XG4gICAgICAgIDxhdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMjRcIiBjbGFzcz1cInNlYXJjaC1sYWJlbFwiPlxuICAgICAgICAgICAge3sgKFwiTW9kZWwuXCIgKyBpdGVtLm5hbWUpIHwgSTE4biB8IGFzeW5jfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YXQtZm9ybS1jb250cm9sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpdGVtLnR5cGVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgKm5nU3dpdGNoQ2FzZT1cIidpbnB1dCdcIiBhdC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zWydzZWFyY2hbbGlrZV8nK2l0ZW0ua2V5ICsnXSddXCI+XG4gICAgICAgICAgICAgIDxhdElucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F0VHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VhcmNoX3BhcmFtc1snc2VhcmNoWycraXRlbS5rZXkgKyddJ11cIj5cbiAgICAgICAgICAgICAgPC9hdElucHV0PlxuICAgICAgICAgICAgICA8YXQtc2VsZWN0IFttdWx0aXBsZV09XCJpdGVtLm11bHRpcGxlXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zWydzZWFyY2hbJytpdGVtLmtleSArJ10nXVwiICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMjkwcHhcIj5cbiAgICAgICAgICAgICAgICA8YXQtb3B0aW9uIFthdExhYmVsXT1cIidEYXRhU291cmNlLmFsbCcgfCBJMThuIHwgYXN5bmNcIiBbYXRWYWx1ZV09XCInJ1wiPjwvYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxhdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiAgaXRlbS5hc3luYyA/IChpdGVtLmRhdGFfc291cmNlIHwgYXN5bmMpIDogaXRlbS5kYXRhX3NvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXRMYWJlbF09XCJvcHRpb24ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXRWYWx1ZV09XCJvcHRpb24udmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8L2F0LW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidyYW5nZSdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjExXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdERhdGV0aW1lUGlja2VyIFtuZ01vZGVsXT1cInJhbmdlX2tleXNbaXRlbS5rZXldPy5iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJY29uXT1cIidjYWxlbmRhcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRSYW5nZSgkZXZlbnQsaXRlbS5rZXksJ2JlZm9yZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCInWVlZWS1NTS1ERCBISDptbTpzcydcIj48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjFcIiBzdHlsZT1cIiAgbGVmdDogMSU7cG9zaXRpb246IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdC1kaXZpZGVyIFtoZWlnaHRdPVwiM1wiPjwvYXQtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIiBbb2Zmc2V0XT1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0RGF0ZXRpbWVQaWNrZXIgW25nTW9kZWxdPVwicmFuZ2Vfa2V5c1tpdGVtLmtleV0/LmFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWNvbl09XCInY2FsZW5kYXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0UmFuZ2UoJGV2ZW50LGl0ZW0ua2V5LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCInWVlZWS1NTS1ERCBISDptbTpzcydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZURhdGVdPVwicmFuZ2Vfa2V5c1tpdGVtLmtleV0/LmJlZm9yZVwiPjwvYXREYXRldGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvYXQtZm9ybS1jb250cm9sPlxuICAgICAgICA8L2F0LWZvcm0taXRlbT5cblxuICAgICAgPC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXh0cmFfc2VhcmNoXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyNHB4XCI+XG4gICAgICAgICAgPGF0LWNoZWNrYm94IFtsYWJlbF09XCInQnV0dG9uLm1vcmVfZmlsdGVyJyB8IEkxOG4gfCBhc3luY1wiIFsobmdNb2RlbCldPVwic2hvd19tb3JlXCI+XG4gICAgICAgICAgPC9hdC1jaGVja2JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJzaG93X21vcmVcIiBhdC1jb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgIDxhdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjExXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiIGNsYXNzPVwic2VhcmNoLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC5Db21tb24uY3JlYXRlZF9hdCdcIj48L3R0LWkxOG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhdC1mb3JtLWNvbnRyb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0RGF0ZXRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJY29uXT1cIidjYWxlbmRhcidcIlxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY3JlYXRlZF9hdF9iZWZvcmVcIiBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlQ3JlYXRlKCRldmVudCwnYWZ0ZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Nob2ljZV9tb2RhbF09XCInZGF0ZSdcIj48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjJcIiBjbGFzcz1cIm1pZGRsZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW2hlaWdodF09XCIzXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIGNsYXNzPVwic2VhcmNoLWxhYmVsXCIgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi5jcmVhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjcmVhdGVkX2F0X2FmdGVyXCIgW2Rpc2FibGVEYXRlXT1cImNyZWF0ZWRfYXRfYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDcmVhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCInWVlZWS1NTS1ERCdcIlxuICAgICAgICAgICAgICAgICAgICA+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9hdC1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIiBbb2Zmc2V0XT1cIjFcIj5cbiAgICAgICAgICAgIDxhdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjExXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiIGNsYXNzPVwic2VhcmNoLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC5Db21tb24udXBkYXRlZF9hdCdcIj48L3R0LWkxOG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhdC1mb3JtLWNvbnRyb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGF0RGF0ZXRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJY29uXT1cIidjYWxlbmRhcidcIlxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXBkYXRlZF9hdF9iZWZvcmVcIiBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlVXBkYXRlKCRldmVudCwnYWZ0ZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Nob2ljZV9tb2RhbF09XCInZGF0ZSdcIj48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjJcIiBjbGFzcz1cIm1pZGRsZS1saW5lXCI+XG4gICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW2hlaWdodF09XCIzXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIGNsYXNzPVwic2VhcmNoLWxhYmVsXCIgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi51cGRhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1cGRhdGVkX2F0X2FmdGVyXCIgW2Rpc2FibGVEYXRlXT1cInVwZGF0ZWRfYXRfYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VVcGRhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCInWVlZWS1NTS1ERCdcIlxuICAgICAgICAgICAgICAgICAgICA+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9hdC1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hdC1mb3JtLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAyNHB4XCI+XG4gICAgICAgICAgPGJ1dHRvbiBhdC1idXR0b24gKGNsaWNrKT1cInNlYXJjaCgpXCIgW2F0VHlwZV09XCIncHJpbWFyeSdcIj5cbiAgICAgICAgICAgIDxzcGFuPjx0dC1pMThuIFt0XT1cIidCdXR0b24uc2VhcmNoJ1wiPjwvdHQtaTE4bj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIiBbaGVpZ2h0XT1cIjIwXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgIDxidXR0b24gYXQtYnV0dG9uIChjbGljayk9XCJyZXNldCgpXCIgW2F0VHlwZV09XCIncHJpbWFyeSdcIiBob2xsb3c+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICA8dHQtaTE4biBbdF09XCInQnV0dG9uLnJlc2V0J1wiPjwvdHQtaTE4bj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uc1wiID48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS08ZGl2IGF0LXJvdyBjbGFzcz1cImZpbHRlci1jb250YWluZXJcIj4tLT5cbiAgICA8IS0tPGF0LWRyb3Bkb3duIFt0cmlnZ2VyXT1cIidjbGljaydcIiBbYXV0b0Nsb3NlXT1cImZhbHNlXCI+LS0+XG4gICAgPCEtLTxidXR0b24gYXQtZHJvcGRvd24gYXQtYnV0dG9uPjxzcGFuPuetm+mAieWIl+ihqDwvc3Bhbj48L2J1dHRvbj4tLT5cbiAgICA8IS0tPHVsIGF0LWRyb3AtbWVudS1saXN0Pi0tPlxuICAgIDwhLS08bGkgYXQtZHJvcC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VhcmNoX2NvbHVtbnNcIj4tLT5cbiAgICA8IS0te3sgKFwiTW9kZWwuXCIgKyBpdGVtLm5hbWUpIHwgSTE4biB8IGFzeW5jfX0tLT5cbiAgICA8IS0tPC9saT4tLT5cbiAgICA8IS0tPC91bD4tLT5cbiAgICA8IS0tPC9hdC1kcm9wZG93bj4tLT5cbiAgICA8IS0tPC9kaXY+LS0+XG4gIGAsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWFyY2hHcm91cENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV0sXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1ncm91cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KClcbiAgc2VhcmNoX2NvbHVtbnM6IFNlYXJjaENvbHVtbiBbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGV4dHJhX2Zvcm06IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIHNlYXJjaF9wYXJhbXM6IHsgW3g6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgYnV0dG9uczogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBleHRyYV9zZWFyY2g6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT47XG5cbiAgY3JlYXRlZF9hdF9iZWZvcmUgPSAnJztcblxuICBjcmVhdGVkX2F0X2FmdGVyID0gJyc7XG5cbiAgdXBkYXRlZF9hdF9iZWZvcmUgPSAnJztcblxuICB1cGRhdGVkX2F0X2FmdGVyID0gJyc7XG5cbiAgc2hvd19tb3JlID0gZmFsc2U7XG5cbiAgcmFuZ2Vfa2V5cyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogeyBbeDogc3RyaW5nXTogc3RyaW5nIH0pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShvYmo6IHsgW3g6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gICAgaWYgKGlzTm90TmlsKG9iaikpIHtcbiAgICAgIHRoaXMuc2VhcmNoX3BhcmFtcyA9IG9iajtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtcyA9IHt9O1xuICAgIHRoaXMuY3JlYXRlZF9hdF9iZWZvcmUgPSAnJztcbiAgICB0aGlzLmNyZWF0ZWRfYXRfYWZ0ZXIgPSAnJztcbiAgICB0aGlzLnVwZGF0ZWRfYXRfYmVmb3JlID0gJyc7XG4gICAgdGhpcy51cGRhdGVkX2F0X2FmdGVyID0gJyc7XG4gICAgdGhpcy5yYW5nZV9rZXlzID0ge307XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuXG4gIH1cblxuICBjaGFuZ2VDcmVhdGUoJGV2ZW50OiBzdHJpbmcsIGFmdGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaF9wYXJhbXNbJ3NlYXJjaFtiZXR3ZWVuX2NyZWF0ZWRfYXRdJ10gPSBgJHt0aGlzLmNyZWF0ZWRfYXRfYmVmb3JlfSwke3RoaXMuY3JlYXRlZF9hdF9hZnRlcn1gO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWFyY2hfcGFyYW1zKTtcbiAgfVxuXG4gIGNoYW5nZVVwZGF0ZSgkZXZlbnQ6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtc1snc2VhcmNoW2JldHdlZW5fdXBkYXRlZF9hdF0nXSA9IGAke3RoaXMudXBkYXRlZF9hdF9iZWZvcmV9LCR7dGhpcy51cGRhdGVkX2F0X2FmdGVyfWA7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuICB9XG5cbiAgc2V0UmFuZ2UodmFsdWU6IHN0cmluZywga2V5OiBzdHJpbmcsIGFmdGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmFuZ2Vfa2V5c1trZXldKSB7XG4gICAgICB0aGlzLnJhbmdlX2tleXNba2V5XSA9IHtiZWZvcmU6ICcnLCBhZnRlcjogJyd9O1xuICAgIH1cbiAgICB0aGlzLnJhbmdlX2tleXNba2V5XVthZnRlcl0gPSB2YWx1ZTtcbiAgICB0aGlzLnNlYXJjaF9wYXJhbXNbYHNlYXJjaFtiZXR3ZWVuXyR7a2V5fV1gXSA9IGAke3RoaXMucmFuZ2Vfa2V5c1trZXldLmJlZm9yZX0gLCAke3RoaXMucmFuZ2Vfa2V5c1trZXldLmFmdGVyfWA7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuICB9XG59XG4iXX0=