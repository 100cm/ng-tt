import { Component, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../../helper/data-cheker';
import { Observable } from 'rxjs';

export interface SearchColumn {
  name: string;
  key: string;
  type: 'input' | 'select' | 'date' | 'range';
  data_source?: Array<{ name: string, value: string | number }> | Observable<Array<{ name: string, value: string | number }>>;
  async?: boolean;
  multiple: boolean;

  changeAction?(): void;
}

@Component({
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
    useExisting: forwardRef(() => SearchGroupComponent),
    multi: true
  }],
  styleUrls: ['./search-group.component.scss']
})
export class SearchGroupComponent implements OnInit, ControlValueAccessor {

  @Input()
  search_columns: SearchColumn [] = [];

  @Input() extra_form: TemplateRef<void>;

  search_params: { [x: string]: string } = {};

  @Output() readonly onSearch = new EventEmitter();

  // tslint:disable-next-line:no-any
  @Input() buttons: TemplateRef<{ $implicit: any }>;
  // tslint:disable-next-line:no-any
  @Input() extra_search: TemplateRef<{ $implicit: any }>;

  created_at_before = '';

  created_at_after = '';

  updated_at_before = '';

  updated_at_after = '';

  show_more = false;

  range_keys = {};

  constructor() {
  }

  onChange: (value: { [x: string]: string }) => void = () => null;
  onTouched: () => void = () => null;

  registerOnChange(fn: (_: { [x: string]: string }) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(obj: { [x: string]: string }): void {
    if (isNotNil(obj)) {
      this.search_params = obj;
    }
  }

  ngOnInit(): void {
  }

  search(): void {
    this.onSearch.emit();
  }

  reset(): void {
    this.search_params = {};
    this.created_at_before = '';
    this.created_at_after = '';
    this.updated_at_before = '';
    this.updated_at_after = '';
    this.range_keys = {};
    this.onChange(this.search_params);

  }

  changeCreate($event: string, after: string): void {
    this.search_params['search[between_created_at]'] = `${this.created_at_before},${this.created_at_after}`;
    this.onChange(this.search_params);
  }

  changeUpdate($event: string, after: string): void {
    this.search_params['search[between_updated_at]'] = `${this.updated_at_before},${this.updated_at_after}`;
    this.onChange(this.search_params);
  }

  setRange(value: string, key: string, after: string): void {
    if (!this.range_keys[key]) {
      this.range_keys[key] = {before: '', after: ''};
    }
    this.range_keys[key][after] = value;
    this.search_params[`search[between_${key}]`] = `${this.range_keys[key].before} , ${this.range_keys[key].after}`;
    this.onChange(this.search_params);
  }
}
