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
    close() {
        this.visible = false;
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
     * @return {?}
     */
    edit() {
        this.visible = true;
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
    /**
     * @return {?}
     */
    batchUpdate() {
        this.update.emit(this.edit_params);
        this.visible = false;
    }
    /**
     * @return {?}
     */
    batchDelete() {
        this.delete.emit();
    }
}
SearchGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'tt-search-group',
                template: `
    <div at-row class="search-bar-container">
      <ng-template [ngTemplateOutlet]="search_template"></ng-template>
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
          <at-divider [vertical]="true" [height]="20"></at-divider>
          <button at-button (click)="edit()" [atType]="'primary'">
            <span>批量编辑</span>
          </button>
          <ng-template [ngTemplateOutlet]="buttons"></ng-template>
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

    <at-drawer [atClosable]="true" [atVisible]="visible" (atOnClose)="close()" atPlacement="right" [atTitle]="drawer_title" [atWidth]="320">
      <ng-template [ngTemplateOutlet]="edit_template"></ng-template>
    </at-drawer>
    <ng-template #drawer_title>
      <button at-button (click)="batchUpdate()" [atType]="'primary'"> 批量更新</button>
      <!--<at-divider [vertical]="true" [height]="20"></at-divider>-->
      <!--<button at-button (click)="batchDelete()" [atType]="'error'" hollow> 批量删除</button>-->
    </ng-template>

    <ng-template #search_template let-item let-bind="bind">
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
              <at-select [multiple]="item.multiple" [(ngModel)]="search_params['search['+item.key +']'+ (item.multiple ? '[]' : '')]"
                         *ngSwitchCase="'select'"
                         style="width: 290px">
                <at-option *ngIf="!item.multiple" [atLabel]="'DataSource.all' | I18n | async" [atValue]="''"></at-option>
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
    </ng-template>

    <ng-template #edit_template let-item let-bind="bind">
      <div *ngFor="let item of edit_columns;let i =index" at-col [span]="24">
        <at-form-item>
          <div at-col [span]="24" class="search-label">
            {{ ("Model." + item.name) | I18n | async}}
          </div>
          <at-form-control [span]="24">
            <ng-container [ngSwitch]="item.type">
              <input class="search-input" *ngSwitchCase="'input'" at-input
                     [(ngModel)]="edit_params[item.key]">
              <atInput class="search-input" *ngSwitchCase="'number'"
                       [atType]="'number'"
                       [(ngModel)]="edit_params[item.key]">
              </atInput>
              <at-select [multiple]="item.multiple" [(ngModel)]="edit_params[item.key]" *ngSwitchCase="'select'"
                         style="width: 290px">
                <at-option *ngIf="!item.multiple" [atLabel]="'DataSource.all' | I18n | async" [atValue]="''"></at-option>
                <at-option *ngFor="let option of  item.async ? (item.data_source | async) : item.data_source"
                           [atLabel]="option.name"
                           [atValue]="option.value">
                </at-option>
              </at-select>
              <ng-container *ngSwitchCase="'date'">
                <div at-row>
                  <div at-col [span]="24">
                    <atDatetimePicker [(ngModel)]="edit_params[item.key]"
                                      [inputIcon]="'calendar'"
                                      [format]="'YYYY-MM-DD HH:mm:ss'"></atDatetimePicker>
                  </div>
                </div>
              </ng-container>
            </ng-container>
          </at-form-control>
        </at-form-item>

      </div>
    </ng-template>
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
    extra_search: [{ type: Input }],
    update: [{ type: Output }],
    delete: [{ type: Output }],
    edit_columns: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXR0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWFyY2gtZ3JvdXAvc2VhcmNoLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHcEQsa0NBU0M7OztJQVJDLDRCQUFhOztJQUNiLDJCQUFZOztJQUNaLDRCQUE0Qzs7SUFDNUMsbUNBQTRIOztJQUM1SCw2QkFBZ0I7O0lBQ2hCLGdDQUFrQjs7OztJQUVsQixzREFBc0I7O0FBcU94QixNQUFNLE9BQU8sb0JBQW9CO0lBbUMvQjtRQWhDQSxtQkFBYyxHQUFvQixFQUFFLENBQUM7UUFJckMsa0JBQWEsR0FBNEIsRUFBRSxDQUFDO1FBRXpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztRQVE5QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0MsV0FBTSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUV2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRXZCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFLakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixpQkFBWSxHQUFvQixFQUFFLENB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b250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uLy4uL2hlbHBlci9kYXRhLWNoZWtlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQ29sdW1uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgdHlwZTogJ2lucHV0JyB8ICdzZWxlY3QnIHwgJ2RhdGUnIHwgJ3JhbmdlJztcbiAgZGF0YV9zb3VyY2U/OiBBcnJheTx7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB9PiB8IE9ic2VydmFibGU8QXJyYXk8eyBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfT4+O1xuICBhc3luYz86IGJvb2xlYW47XG4gIG11bHRpcGxlOiBib29sZWFuO1xuXG4gIGNoYW5nZUFjdGlvbj8oKTogdm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHQtc2VhcmNoLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGF0LXJvdyBjbGFzcz1cInNlYXJjaC1iYXItY29udGFpbmVyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VhcmNoX3RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYV9zZWFyY2hcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDI0cHhcIj5cbiAgICAgICAgICA8YXQtY2hlY2tib3ggW2xhYmVsXT1cIidCdXR0b24ubW9yZV9maWx0ZXInIHwgSTE4biB8IGFzeW5jXCIgWyhuZ01vZGVsKV09XCJzaG93X21vcmVcIj5cbiAgICAgICAgICA8L2F0LWNoZWNrYm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cInNob3dfbW9yZVwiIGF0LWNvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiPlxuICAgICAgICAgICAgPGF0LWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCIgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi5jcmVhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjcmVhdGVkX2F0X2JlZm9yZVwiIFtmb3JtYXRdPVwiJ1lZWVktTU0tREQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VDcmVhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiPjwvYXREYXRldGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvYXQtZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMlwiIGNsYXNzPVwibWlkZGxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8YXQtZGl2aWRlciBbaGVpZ2h0XT1cIjNcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgYXQtcm93PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIiBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuQ29tbW9uLmNyZWF0ZWRfYXQnXCI+PC90dC1pMThuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YXQtZm9ybS1jb250cm9sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdERhdGV0aW1lUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWNvbl09XCInY2FsZW5kYXInXCJcbiAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImNyZWF0ZWRfYXRfYWZ0ZXJcIiBbZGlzYWJsZURhdGVdPVwiY3JlYXRlZF9hdF9iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZUNyZWF0ZSgkZXZlbnQsJ2FmdGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjaG9pY2VfbW9kYWxdPVwiJ2RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgID48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2F0LWZvcm0taXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiIFtvZmZzZXRdPVwiMVwiPlxuICAgICAgICAgICAgPGF0LWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCIgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkNvbW1vbi51cGRhdGVkX2F0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGF0LWZvcm0tY29udHJvbCBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1cGRhdGVkX2F0X2JlZm9yZVwiIFtmb3JtYXRdPVwiJ1lZWVktTU0tREQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VVcGRhdGUoJGV2ZW50LCdhZnRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2hvaWNlX21vZGFsXT1cIidkYXRlJ1wiPjwvYXREYXRldGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvYXQtZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMlwiIGNsYXNzPVwibWlkZGxlLWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8YXQtZGl2aWRlciBbaGVpZ2h0XT1cIjNcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgYXQtcm93PlxuICAgICAgICAgICAgICAgICAgPGRpdiBhdC1jb2wgY2xhc3M9XCJzZWFyY2gtbGFiZWxcIiBbc3Bhbl09XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuQ29tbW9uLnVwZGF0ZWRfYXQnXCI+PC90dC1pMThuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YXQtZm9ybS1jb250cm9sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdERhdGV0aW1lUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWNvbl09XCInY2FsZW5kYXInXCJcbiAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVwZGF0ZWRfYXRfYWZ0ZXJcIiBbZGlzYWJsZURhdGVdPVwidXBkYXRlZF9hdF9iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVVwZGF0ZSgkZXZlbnQsJ2FmdGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjaG9pY2VfbW9kYWxdPVwiJ2RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0XT1cIidZWVlZLU1NLUREJ1wiXG4gICAgICAgICAgICAgICAgICAgID48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2F0LWZvcm0taXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBhdC1jb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDI0cHhcIj5cbiAgICAgICAgICA8YnV0dG9uIGF0LWJ1dHRvbiAoY2xpY2spPVwic2VhcmNoKClcIiBbYXRUeXBlXT1cIidwcmltYXJ5J1wiPlxuICAgICAgICAgICAgPHNwYW4+PHR0LWkxOG4gW3RdPVwiJ0J1dHRvbi5zZWFyY2gnXCI+PC90dC1pMThuPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiIFtoZWlnaHRdPVwiMjBcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgPGJ1dHRvbiBhdC1idXR0b24gKGNsaWNrKT1cInJlc2V0KClcIiBbYXRUeXBlXT1cIidwcmltYXJ5J1wiIGhvbGxvdz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICA8dHQtaTE4biBbdF09XCInQnV0dG9uLnJlc2V0J1wiPjwvdHQtaTE4bj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiIFtoZWlnaHRdPVwiMjBcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgPGJ1dHRvbiBhdC1idXR0b24gKGNsaWNrKT1cImVkaXQoKVwiIFthdFR5cGVdPVwiJ3ByaW1hcnknXCI+XG4gICAgICAgICAgICA8c3Bhbj7mibnph4/nvJbovpE8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvbnNcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS08ZGl2IGF0LXJvdyBjbGFzcz1cImZpbHRlci1jb250YWluZXJcIj4tLT5cbiAgICA8IS0tPGF0LWRyb3Bkb3duIFt0cmlnZ2VyXT1cIidjbGljaydcIiBbYXV0b0Nsb3NlXT1cImZhbHNlXCI+LS0+XG4gICAgPCEtLTxidXR0b24gYXQtZHJvcGRvd24gYXQtYnV0dG9uPjxzcGFuPuetm+mAieWIl+ihqDwvc3Bhbj48L2J1dHRvbj4tLT5cbiAgICA8IS0tPHVsIGF0LWRyb3AtbWVudS1saXN0Pi0tPlxuICAgIDwhLS08bGkgYXQtZHJvcC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VhcmNoX2NvbHVtbnNcIj4tLT5cbiAgICA8IS0te3sgKFwiTW9kZWwuXCIgKyBpdGVtLm5hbWUpIHwgSTE4biB8IGFzeW5jfX0tLT5cbiAgICA8IS0tPC9saT4tLT5cbiAgICA8IS0tPC91bD4tLT5cbiAgICA8IS0tPC9hdC1kcm9wZG93bj4tLT5cbiAgICA8IS0tPC9kaXY+LS0+XG5cbiAgICA8YXQtZHJhd2VyIFthdENsb3NhYmxlXT1cInRydWVcIiBbYXRWaXNpYmxlXT1cInZpc2libGVcIiAoYXRPbkNsb3NlKT1cImNsb3NlKClcIiBhdFBsYWNlbWVudD1cInJpZ2h0XCIgW2F0VGl0bGVdPVwiZHJhd2VyX3RpdGxlXCIgW2F0V2lkdGhdPVwiMzIwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZWRpdF90ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9hdC1kcmF3ZXI+XG4gICAgPG5nLXRlbXBsYXRlICNkcmF3ZXJfdGl0bGU+XG4gICAgICA8YnV0dG9uIGF0LWJ1dHRvbiAoY2xpY2spPVwiYmF0Y2hVcGRhdGUoKVwiIFthdFR5cGVdPVwiJ3ByaW1hcnknXCI+IOaJuemHj+abtOaWsDwvYnV0dG9uPlxuICAgICAgPCEtLTxhdC1kaXZpZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCIgW2hlaWdodF09XCIyMFwiPjwvYXQtZGl2aWRlcj4tLT5cbiAgICAgIDwhLS08YnV0dG9uIGF0LWJ1dHRvbiAoY2xpY2spPVwiYmF0Y2hEZWxldGUoKVwiIFthdFR5cGVdPVwiJ2Vycm9yJ1wiIGhvbGxvdz4g5om56YeP5Yig6ZmkPC9idXR0b24+LS0+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjc2VhcmNoX3RlbXBsYXRlIGxldC1pdGVtIGxldC1iaW5kPVwiYmluZFwiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWFyY2hfY29sdW1ucztsZXQgaSA9aW5kZXhcIiBhdC1jb2wgW3NwYW5dPVwiaXRlbS50eXBlID09PSdyYW5nZSc/IDExIDogNVwiXG4gICAgICAgICAgIFtvZmZzZXRdPVwiICgoaSkgJSA0KSA9PSAwID8gMCA6IDFcIj5cbiAgICAgICAgPGF0LWZvcm0taXRlbT5cbiAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiIGNsYXNzPVwic2VhcmNoLWxhYmVsXCI+XG4gICAgICAgICAgICB7eyAoXCJNb2RlbC5cIiArIGl0ZW0ubmFtZSkgfCBJMThuIHwgYXN5bmN9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhdC1mb3JtLWNvbnRyb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIml0ZW0udHlwZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2lucHV0J1wiIGF0LWlucHV0XG4gICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlYXJjaF9wYXJhbXNbJ3NlYXJjaFtsaWtlXycraXRlbS5rZXkgKyddJ11cIj5cbiAgICAgICAgICAgICAgPGF0SW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXRUeXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zWydzZWFyY2hbJytpdGVtLmtleSArJ10nXVwiPlxuICAgICAgICAgICAgICA8L2F0SW5wdXQ+XG4gICAgICAgICAgICAgIDxhdC1zZWxlY3QgW211bHRpcGxlXT1cIml0ZW0ubXVsdGlwbGVcIiBbKG5nTW9kZWwpXT1cInNlYXJjaF9wYXJhbXNbJ3NlYXJjaFsnK2l0ZW0ua2V5ICsnXScrIChpdGVtLm11bHRpcGxlID8gJ1tdJyA6ICcnKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMjkwcHhcIj5cbiAgICAgICAgICAgICAgICA8YXQtb3B0aW9uICpuZ0lmPVwiIWl0ZW0ubXVsdGlwbGVcIiBbYXRMYWJlbF09XCInRGF0YVNvdXJjZS5hbGwnIHwgSTE4biB8IGFzeW5jXCIgW2F0VmFsdWVdPVwiJydcIj48L2F0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8YXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgIGl0ZW0uYXN5bmMgPyAoaXRlbS5kYXRhX3NvdXJjZSB8IGFzeW5jKSA6IGl0ZW0uZGF0YV9zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0TGFiZWxdPVwib3B0aW9uLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0VmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPC9hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvYXQtc2VsZWN0PlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncmFuZ2UnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBhdC1yb3c+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxMVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXREYXRldGltZVBpY2tlciBbbmdNb2RlbF09XCJyYW5nZV9rZXlzW2l0ZW0ua2V5XT8uYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWNvbl09XCInY2FsZW5kYXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0UmFuZ2UoJGV2ZW50LGl0ZW0ua2V5LCdiZWZvcmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRdPVwiJ1lZWVktTU0tREQgSEg6bW06c3MnXCI+PC9hdERhdGV0aW1lUGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIxXCIgc3R5bGU9XCIgIGxlZnQ6IDElO3Bvc2l0aW9uOiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXQtZGl2aWRlciBbaGVpZ2h0XT1cIjNcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjExXCIgW29mZnNldF09XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdERhdGV0aW1lUGlja2VyIFtuZ01vZGVsXT1cInJhbmdlX2tleXNbaXRlbS5rZXldPy5hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dEljb25dPVwiJ2NhbGVuZGFyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFJhbmdlKCRldmVudCxpdGVtLmtleSwnYWZ0ZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRdPVwiJ1lZWVktTU0tREQgSEg6bW06c3MnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVEYXRlXT1cInJhbmdlX2tleXNbaXRlbS5rZXldPy5iZWZvcmVcIj48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgPC9hdC1mb3JtLWl0ZW0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI2VkaXRfdGVtcGxhdGUgbGV0LWl0ZW0gbGV0LWJpbmQ9XCJiaW5kXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGVkaXRfY29sdW1ucztsZXQgaSA9aW5kZXhcIiBhdC1jb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgPGF0LWZvcm0taXRlbT5cbiAgICAgICAgICA8ZGl2IGF0LWNvbCBbc3Bhbl09XCIyNFwiIGNsYXNzPVwic2VhcmNoLWxhYmVsXCI+XG4gICAgICAgICAgICB7eyAoXCJNb2RlbC5cIiArIGl0ZW0ubmFtZSkgfCBJMThuIHwgYXN5bmN9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhdC1mb3JtLWNvbnRyb2wgW3NwYW5dPVwiMjRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIml0ZW0udHlwZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiAqbmdTd2l0Y2hDYXNlPVwiJ2lucHV0J1wiIGF0LWlucHV0XG4gICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVkaXRfcGFyYW1zW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICA8YXRJbnB1dCBjbGFzcz1cInNlYXJjaC1pbnB1dFwiICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFthdFR5cGVdPVwiJ251bWJlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImVkaXRfcGFyYW1zW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICA8L2F0SW5wdXQ+XG4gICAgICAgICAgICAgIDxhdC1zZWxlY3QgW211bHRpcGxlXT1cIml0ZW0ubXVsdGlwbGVcIiBbKG5nTW9kZWwpXT1cImVkaXRfcGFyYW1zW2l0ZW0ua2V5XVwiICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMjkwcHhcIj5cbiAgICAgICAgICAgICAgICA8YXQtb3B0aW9uICpuZ0lmPVwiIWl0ZW0ubXVsdGlwbGVcIiBbYXRMYWJlbF09XCInRGF0YVNvdXJjZS5hbGwnIHwgSTE4biB8IGFzeW5jXCIgW2F0VmFsdWVdPVwiJydcIj48L2F0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8YXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgIGl0ZW0uYXN5bmMgPyAoaXRlbS5kYXRhX3NvdXJjZSB8IGFzeW5jKSA6IGl0ZW0uZGF0YV9zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0TGFiZWxdPVwib3B0aW9uLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0VmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPC9hdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvYXQtc2VsZWN0PlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGF0LXJvdz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgYXQtY29sIFtzcGFuXT1cIjI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdERhdGV0aW1lUGlja2VyIFsobmdNb2RlbCldPVwiZWRpdF9wYXJhbXNbaXRlbS5rZXldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWNvbl09XCInY2FsZW5kYXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdF09XCInWVlZWS1NTS1ERCBISDptbTpzcydcIj48L2F0RGF0ZXRpbWVQaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2F0LWZvcm0tY29udHJvbD5cbiAgICAgICAgPC9hdC1mb3JtLWl0ZW0+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWFyY2hHcm91cENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbiAgfV0sXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1ncm91cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KClcbiAgc2VhcmNoX2NvbHVtbnM6IFNlYXJjaENvbHVtbiBbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGV4dHJhX2Zvcm06IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIHNlYXJjaF9wYXJhbXM6IHsgW3g6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgYnV0dG9uczogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBleHRyYV9zZWFyY2g6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVsZXRlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY3JlYXRlZF9hdF9iZWZvcmUgPSAnJztcblxuICBjcmVhdGVkX2F0X2FmdGVyID0gJyc7XG5cbiAgdXBkYXRlZF9hdF9iZWZvcmUgPSAnJztcblxuICB1cGRhdGVkX2F0X2FmdGVyID0gJyc7XG5cbiAgc2hvd19tb3JlID0gZmFsc2U7XG5cbiAgcmFuZ2Vfa2V5cyA9IHt9O1xuXG4gIGVkaXRfcGFyYW1zID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICB2aXNpYmxlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZWRpdF9jb2x1bW5zOiBTZWFyY2hDb2x1bW4gW10gPSBbXTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHsgW3g6IHN0cmluZ106IHN0cmluZyB9KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogeyBbeDogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBpZiAoaXNOb3ROaWwob2JqKSkge1xuICAgICAgdGhpcy5zZWFyY2hfcGFyYW1zID0gb2JqO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2guZW1pdCgpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaF9wYXJhbXMgPSB7fTtcbiAgICB0aGlzLmNyZWF0ZWRfYXRfYmVmb3JlID0gJyc7XG4gICAgdGhpcy5jcmVhdGVkX2F0X2FmdGVyID0gJyc7XG4gICAgdGhpcy51cGRhdGVkX2F0X2JlZm9yZSA9ICcnO1xuICAgIHRoaXMudXBkYXRlZF9hdF9hZnRlciA9ICcnO1xuICAgIHRoaXMucmFuZ2Vfa2V5cyA9IHt9O1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWFyY2hfcGFyYW1zKTtcblxuICB9XG5cbiAgZWRpdCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgY2hhbmdlQ3JlYXRlKCRldmVudDogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hfcGFyYW1zWydzZWFyY2hbYmV0d2Vlbl9jcmVhdGVkX2F0XSddID0gYCR7dGhpcy5jcmVhdGVkX2F0X2JlZm9yZX0sJHt0aGlzLmNyZWF0ZWRfYXRfYWZ0ZXJ9YDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VhcmNoX3BhcmFtcyk7XG4gIH1cblxuICBjaGFuZ2VVcGRhdGUoJGV2ZW50OiBzdHJpbmcsIGFmdGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaF9wYXJhbXNbJ3NlYXJjaFtiZXR3ZWVuX3VwZGF0ZWRfYXRdJ10gPSBgJHt0aGlzLnVwZGF0ZWRfYXRfYmVmb3JlfSwke3RoaXMudXBkYXRlZF9hdF9hZnRlcn1gO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWFyY2hfcGFyYW1zKTtcbiAgfVxuXG4gIHNldFJhbmdlKHZhbHVlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBhZnRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhbmdlX2tleXNba2V5XSkge1xuICAgICAgdGhpcy5yYW5nZV9rZXlzW2tleV0gPSB7YmVmb3JlOiAnJywgYWZ0ZXI6ICcnfTtcbiAgICB9XG4gICAgdGhpcy5yYW5nZV9rZXlzW2tleV1bYWZ0ZXJdID0gdmFsdWU7XG4gICAgdGhpcy5zZWFyY2hfcGFyYW1zW2BzZWFyY2hbYmV0d2Vlbl8ke2tleX1dYF0gPSBgJHt0aGlzLnJhbmdlX2tleXNba2V5XS5iZWZvcmV9ICwgJHt0aGlzLnJhbmdlX2tleXNba2V5XS5hZnRlcn1gO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5zZWFyY2hfcGFyYW1zKTtcbiAgfVxuXG4gIGJhdGNoVXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5lZGl0X3BhcmFtcyk7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBiYXRjaERlbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==