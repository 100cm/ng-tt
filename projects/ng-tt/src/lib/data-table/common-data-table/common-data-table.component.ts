import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DataBaseComponent } from '../../data-base/database.component';
import { SearchParams } from '../../interfaces/any-object.interface';

export interface CommonDataTableColumn {
  name: string;
  key: string;
  resource?: string;
  resource_key?: string;
  array?: boolean;
  array_key?: string;
  dictionary?: { [x: string]: string };
}

@Component({
  selector: 'tt-common-data-table',
  template: `
    <tt-search-group [search_columns]="search_columns" [extra_search]="extra_search" [(ngModel)]="search_params"
                     (ngModelChange)="changeSearchParams()"
                     (onSearch)="search()"></tt-search-group>
    <at-table>
      <thead at-thead>
      <tr>
        <th *ngFor="let item of columns" at-th style="cursor: text;">
          <tt-i18n [t]="'Model.'+ Model+'.'+item.name"></tt-i18n>
        </th>
        <th at-th>操作</th>
      </tr>
      </thead>
      <tbody at-tbody>
      <tr at-tbody-tr *ngFor="let item of datas"><!---->
        <td at-td *ngFor="let column of columns">
          <ng-container *ngIf="column.resource_key">
            <a
              [routerLink]="prefixRoute +'/'+column.resource +'/' + (item | nestedJsonKey : column.resource_key)">
              {{item | nestedJsonKey : column.key}}</a>
          </ng-container>
          <ng-container *ngIf="!column.resource_key">
            <ng-container *ngIf="column.array">
              <ng-container
                *ngFor="let column_array_item of  (item | nestedJsonKey : column.key);last as isLast">
                <span>{{column.dictionary ? column.dictionary[column_array_item[column.array_key]] : column_array_item[column.array_key]}} </span>
                <at-divider [vertical]="true" *ngIf="!isLast"></at-divider>
              </ng-container>
            </ng-container>
            <ng-container *ngIf="!column.array">
              {{column.dictionary ? column.dictionary[(item | nestedJsonKey : column.key)] : (item | nestedJsonKey : column.key)}}
            </ng-container>
          </ng-container>
        </td>
        <td at-td>
          <a [routerLink]="prefixRoute +'/'+resource +'/edit/' + item.id">
            <tt-i18n [t]="'Model.Handle.edit'"></tt-i18n>
          </a>
          <at-divider [vertical]="true" *ngIf="handle_columns"></at-divider>
          <ng-template [ngTemplateOutlet]="handle_columns" [ngTemplateOutletContext]="{$implicit: item}"></ng-template>
        </td>
      </tr>

      </tbody>
      <div footer>
        <tt-empty-data [data]="datas"></tt-empty-data>
        <div class="page-container">
          <at-pagination [atPageSizer]="true" (pageSizeChange)="pageSizeChange($event)" [pageSize]="per"
                         [atQuickJump]="true"
                         [atPageIndex]="page"
                         [total]="total_count"
                         (pageIndexChange)="pageChange($event)"></at-pagination>
        </div>
      </div>
    </at-table>
  `,
  styleUrls: ['./common-data-table.component.sass']
})
export class CommonDataTableComponent extends DataBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }

  // tslint:disable-next-line:no-any
  @Input() data_service: any;
  @Input() columns: CommonDataTableColumn[] = [];
  @Input() Model = '';
  @Input() resource = '';
  @Input() search_columns = [];
  // tslint:disable-next-line:no-any
  @Input() handle_columns: TemplateRef<{ $implicit: any }>;
  // tslint:disable-next-line:no-any
  @Input() extra_search: TemplateRef<{ $implicit: any }>;
  @Input() prefixRoute = '/dashboard';
  // 搜索参数
  @Input() search_params: SearchParams = {};

  @Output() readonly onSearch: EventEmitter<void> = new EventEmitter();
  @Output() readonly search_paramsChange: EventEmitter<SearchParams> = new EventEmitter();

  loadData(): void {
    this.data_service[this.resource](this.send_param).subscribe(data => {
      this.setData(this.resource, data);
    });
  }

  search(): void {
    super.search();
    this.onSearch.emit();
  }

  changeSearchParams(): void {
    this.search_paramsChange.emit(this.search_params);
  }

  get model(): string {
    return this.Model.toLowerCase();
  }

}
