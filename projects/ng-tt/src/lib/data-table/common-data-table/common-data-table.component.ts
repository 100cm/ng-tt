import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DataBaseComponent } from '../../data-base/database.component';
import { AnyObject, SearchParams } from '../../interfaces/any-object.interface';
import { forkJoin } from 'rxjs';

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
                     (delete)="deleteAll()"
                     (update)="batchUpdate($event)"
                     [edit_columns]="edit_columns"
                     (ngModelChange)="changeSearchParams()"
                     (onSearch)="search()"></tt-search-group>
    <at-table>
      <thead at-thead>
      <tr>
        <th at-th [atWidth]="20">
          <at-checkbox [(ngModel)]="checkAll" (changeCheck)="checkList($event)"></at-checkbox>
        </th>
        <th *ngFor="let item of columns" at-th style="cursor: text;">
          <tt-i18n [t]="'Model.'+ Model+'.'+item.name"></tt-i18n>
        </th>
        <th at-th>操作</th>
      </tr>
      </thead>
      <tbody at-tbody>
      <tr at-tbody-tr *ngFor="let item of datas;let i = index"><!---->
        <td at-td>
          <at-checkbox [(ngModel)]="checkIndexes[i]" (changeCheck)="changeCheckIndex($event)"></at-checkbox>
        </td>
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
  @Input() edit_columns = [];
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

  changeCheckIndex(check: boolean): void {
    this.checkAll = this.checkIndexes.filter(index => index === true).length === this.datas.length;
  }

  checkList(value: boolean): void {
    this.checkIndexes = this.checkIndexes.map(index => value);
  }

  deleteAll(): void {
    // const obs = [];
    // this.checkIndexes.forEach((checked: boolean, index: number) => {
    //   if (checked === true) {
    //     const id = this.datas[index].id;
    //     const params = {
    //     };
    //     params[`${this.model}_id`] = id;
    //     this.data_service.delete().subscribe(data => {
    //       this.setData(this.resource, data);
    //     });
    //   }
    // });

  }

  batchUpdate(update_params: AnyObject): void {
    const obs = [];
    this.checkIndexes.forEach((checked: boolean, index: number) => {
      if (checked === true) {
        for (const key in update_params) {
          if (update_params[key] === '') {
            delete update_params[key];
          }
        }
        const id = this.datas[index].id;
        const params = {
          update: update_params
        };
        params[`${this.model}_id`] = id;
        obs.push(this.data_service.update(params));
      }
    });
    forkJoin(obs).subscribe(data => {
      console.log(data);
    });
  }

}
