/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { DataBaseComponent } from '../../data-base/database.component';
import { forkJoin } from 'rxjs';
/**
 * @record
 */
export function CommonDataTableColumn() { }
if (false) {
    /** @type {?} */
    CommonDataTableColumn.prototype.name;
    /** @type {?} */
    CommonDataTableColumn.prototype.key;
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.resource;
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.resource_key;
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.array;
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.array_key;
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.dictionary;
}
export class CommonDataTableComponent extends DataBaseComponent {
    constructor() {
        super();
        this.columns = [];
        this.Model = '';
        this.resource = '';
        this.search_columns = [];
        this.edit_columns = [];
        this.prefixRoute = '/dashboard';
        // 搜索参数
        this.search_params = {};
        this.onSearch = new EventEmitter();
        this.search_paramsChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loadData();
    }
    /**
     * @return {?}
     */
    loadData() {
        this.data_service[this.resource](this.send_param).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.setData(this.resource, data);
        }));
    }
    /**
     * @return {?}
     */
    search() {
        super.search();
        this.onSearch.emit();
    }
    /**
     * @return {?}
     */
    changeSearchParams() {
        this.search_paramsChange.emit(this.search_params);
    }
    /**
     * @return {?}
     */
    get model() {
        return this.Model.toLowerCase();
    }
    /**
     * @param {?} check
     * @return {?}
     */
    changeCheckIndex(check) {
        this.checkAll = this.checkIndexes.filter((/**
         * @param {?} index
         * @return {?}
         */
        index => index === true)).length === this.datas.length;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    checkList(value) {
        this.checkIndexes = this.checkIndexes.map((/**
         * @param {?} index
         * @return {?}
         */
        index => value));
    }
    /**
     * @return {?}
     */
    deleteAll() {
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
    /**
     * @param {?} update_params
     * @return {?}
     */
    batchUpdate(update_params) {
        /** @type {?} */
        const obs = [];
        this.checkIndexes.forEach((/**
         * @param {?} checked
         * @param {?} index
         * @return {?}
         */
        (checked, index) => {
            if (checked === true) {
                for (const key in update_params) {
                    if (update_params[key] === '') {
                        delete update_params[key];
                    }
                }
                /** @type {?} */
                const id = this.datas[index].id;
                /** @type {?} */
                const params = {
                    update: update_params
                };
                params[`${this.model}_id`] = id;
                obs.push(this.data_service.update(params));
            }
        }));
        forkJoin(obs).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log(data);
        }));
    }
}
CommonDataTableComponent.decorators = [
    { type: Component, args: [{
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
                styles: [""]
            }] }
];
/** @nocollapse */
CommonDataTableComponent.ctorParameters = () => [];
CommonDataTableComponent.propDecorators = {
    data_service: [{ type: Input }],
    columns: [{ type: Input }],
    Model: [{ type: Input }],
    resource: [{ type: Input }],
    search_columns: [{ type: Input }],
    edit_columns: [{ type: Input }],
    handle_columns: [{ type: Input }],
    extra_search: [{ type: Input }],
    prefixRoute: [{ type: Input }],
    search_params: [{ type: Input }],
    onSearch: [{ type: Output }],
    search_paramsChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CommonDataTableComponent.prototype.data_service;
    /** @type {?} */
    CommonDataTableComponent.prototype.columns;
    /** @type {?} */
    CommonDataTableComponent.prototype.Model;
    /** @type {?} */
    CommonDataTableComponent.prototype.resource;
    /** @type {?} */
    CommonDataTableComponent.prototype.search_columns;
    /** @type {?} */
    CommonDataTableComponent.prototype.edit_columns;
    /** @type {?} */
    CommonDataTableComponent.prototype.handle_columns;
    /** @type {?} */
    CommonDataTableComponent.prototype.extra_search;
    /** @type {?} */
    CommonDataTableComponent.prototype.prefixRoute;
    /** @type {?} */
    CommonDataTableComponent.prototype.search_params;
    /** @type {?} */
    CommonDataTableComponent.prototype.onSearch;
    /** @type {?} */
    CommonDataTableComponent.prototype.search_paramsChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFaEMsMkNBUUM7OztJQVBDLHFDQUFhOztJQUNiLG9DQUFZOztJQUNaLHlDQUFrQjs7SUFDbEIsNkNBQXNCOztJQUN0QixzQ0FBZ0I7O0lBQ2hCLDBDQUFtQjs7SUFDbkIsMkNBQXFDOztBQXVFdkMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGlCQUFpQjtJQUU3RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBU0QsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFDdEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUtsQixnQkFBVyxHQUFHLFlBQVksQ0FBQzs7UUFFM0Isa0JBQWEsR0FBaUIsRUFBRSxDQUFDO1FBRXZCLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCx3QkFBbUIsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXRCeEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQW9CRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMs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Q0wsS0FBSzs0QkFFTCxLQUFLO3VCQUVMLE1BQU07a0NBQ04sTUFBTTs7OztJQWZQLGdEQUEyQjs7SUFDM0IsMkNBQStDOztJQUMvQyx5Q0FBb0I7O0lBQ3BCLDRDQUF1Qjs7SUFDdkIsa0RBQTZCOztJQUM3QixnREFBMkI7O0lBRTNCLGtEQUF5RDs7SUFFekQsZ0RBQXVEOztJQUN2RCwrQ0FBb0M7O0lBRXBDLGlEQUEwQzs7SUFFMUMsNENBQXFFOztJQUNyRSx1REFBd0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kYXRhLWJhc2UvZGF0YWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFueU9iamVjdCwgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hbnktb2JqZWN0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1vbkRhdGFUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIHJlc291cmNlPzogc3RyaW5nO1xuICByZXNvdXJjZV9rZXk/OiBzdHJpbmc7XG4gIGFycmF5PzogYm9vbGVhbjtcbiAgYXJyYXlfa2V5Pzogc3RyaW5nO1xuICBkaWN0aW9uYXJ5PzogeyBbeDogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R0LWNvbW1vbi1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dHQtc2VhcmNoLWdyb3VwIFtzZWFyY2hfY29sdW1uc109XCJzZWFyY2hfY29sdW1uc1wiIFtleHRyYV9zZWFyY2hdPVwiZXh0cmFfc2VhcmNoXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zXCJcbiAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlQWxsKClcIlxuICAgICAgICAgICAgICAgICAgICAgKHVwZGF0ZSk9XCJiYXRjaFVwZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgIFtlZGl0X2NvbHVtbnNdPVwiZWRpdF9jb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVNlYXJjaFBhcmFtcygpXCJcbiAgICAgICAgICAgICAgICAgICAgIChvblNlYXJjaCk9XCJzZWFyY2goKVwiPjwvdHQtc2VhcmNoLWdyb3VwPlxuICAgIDxhdC10YWJsZT5cbiAgICAgIDx0aGVhZCBhdC10aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoIGF0LXRoIFthdFdpZHRoXT1cIjIwXCI+XG4gICAgICAgICAgPGF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2hlY2tBbGxcIiAoY2hhbmdlQ2hlY2spPVwiY2hlY2tMaXN0KCRldmVudClcIj48L2F0LWNoZWNrYm94PlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29sdW1uc1wiIGF0LXRoIHN0eWxlPVwiY3Vyc29yOiB0ZXh0O1wiPlxuICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC4nKyBNb2RlbCsnLicraXRlbS5uYW1lXCI+PC90dC1pMThuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGggYXQtdGg+5pON5L2cPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IGF0LXRib2R5PlxuICAgICAgPHRyIGF0LXRib2R5LXRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzO2xldCBpID0gaW5kZXhcIj48IS0tLS0+XG4gICAgICAgIDx0ZCBhdC10ZD5cbiAgICAgICAgICA8YXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjaGVja0luZGV4ZXNbaV1cIiAoY2hhbmdlQ2hlY2spPVwiY2hhbmdlQ2hlY2tJbmRleCgkZXZlbnQpXCI+PC9hdC1jaGVja2JveD5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGF0LXRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4ucmVzb3VyY2Vfa2V5XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJwcmVmaXhSb3V0ZSArJy8nK2NvbHVtbi5yZXNvdXJjZSArJy8nICsgKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLnJlc291cmNlX2tleSlcIj5cbiAgICAgICAgICAgICAge3tpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5rZXl9fTwvYT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5yZXNvdXJjZV9rZXlcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uYXJyYXlcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW5fYXJyYXlfaXRlbSBvZiAgKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleSk7bGFzdCBhcyBpc0xhc3RcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57e2NvbHVtbi5kaWN0aW9uYXJ5ID8gY29sdW1uLmRpY3Rpb25hcnlbY29sdW1uX2FycmF5X2l0ZW1bY29sdW1uLmFycmF5X2tleV1dIDogY29sdW1uX2FycmF5X2l0ZW1bY29sdW1uLmFycmF5X2tleV19fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIiAqbmdJZj1cIiFpc0xhc3RcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5hcnJheVwiPlxuICAgICAgICAgICAgICB7e2NvbHVtbi5kaWN0aW9uYXJ5ID8gY29sdW1uLmRpY3Rpb25hcnlbKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleSldIDogKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleSl9fVxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBhdC10ZD5cbiAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJwcmVmaXhSb3V0ZSArJy8nK3Jlc291cmNlICsnL2VkaXQvJyArIGl0ZW0uaWRcIj5cbiAgICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC5IYW5kbGUuZWRpdCdcIj48L3R0LWkxOG4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhdC1kaXZpZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCIgKm5nSWY9XCJoYW5kbGVfY29sdW1uc1wiPjwvYXQtZGl2aWRlcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGFuZGxlX2NvbHVtbnNcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8ZGl2IGZvb3Rlcj5cbiAgICAgICAgPHR0LWVtcHR5LWRhdGEgW2RhdGFdPVwiZGF0YXNcIj48L3R0LWVtcHR5LWRhdGE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxhdC1wYWdpbmF0aW9uIFthdFBhZ2VTaXplcl09XCJ0cnVlXCIgKHBhZ2VTaXplQ2hhbmdlKT1cInBhZ2VTaXplQ2hhbmdlKCRldmVudClcIiBbcGFnZVNpemVdPVwicGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYXRRdWlja0p1bXBdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2F0UGFnZUluZGV4XT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFt0b3RhbF09XCJ0b3RhbF9jb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2VJbmRleENoYW5nZSk9XCJwYWdlQ2hhbmdlKCRldmVudClcIj48L2F0LXBhZ2luYXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hdC10YWJsZT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25EYXRhVGFibGVDb21wb25lbnQgZXh0ZW5kcyBEYXRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgZGF0YV9zZXJ2aWNlOiBhbnk7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IENvbW1vbkRhdGFUYWJsZUNvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIE1vZGVsID0gJyc7XG4gIEBJbnB1dCgpIHJlc291cmNlID0gJyc7XG4gIEBJbnB1dCgpIHNlYXJjaF9jb2x1bW5zID0gW107XG4gIEBJbnB1dCgpIGVkaXRfY29sdW1ucyA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGhhbmRsZV9jb2x1bW5zOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGV4dHJhX3NlYXJjaDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcbiAgQElucHV0KCkgcHJlZml4Um91dGUgPSAnL2Rhc2hib2FyZCc7XG4gIC8vIOaQnOe0ouWPguaVsFxuICBASW5wdXQoKSBzZWFyY2hfcGFyYW1zOiBTZWFyY2hQYXJhbXMgPSB7fTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlYXJjaF9wYXJhbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTZWFyY2hQYXJhbXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxvYWREYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YV9zZXJ2aWNlW3RoaXMucmVzb3VyY2VdKHRoaXMuc2VuZF9wYXJhbSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHRoaXMucmVzb3VyY2UsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHN1cGVyLnNlYXJjaCgpO1xuICAgIHRoaXMub25TZWFyY2guZW1pdCgpO1xuICB9XG5cbiAgY2hhbmdlU2VhcmNoUGFyYW1zKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtc0NoYW5nZS5lbWl0KHRoaXMuc2VhcmNoX3BhcmFtcyk7XG4gIH1cblxuICBnZXQgbW9kZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5Nb2RlbC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgY2hhbmdlQ2hlY2tJbmRleChjaGVjazogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tBbGwgPSB0aGlzLmNoZWNrSW5kZXhlcy5maWx0ZXIoaW5kZXggPT4gaW5kZXggPT09IHRydWUpLmxlbmd0aCA9PT0gdGhpcy5kYXRhcy5sZW5ndGg7XG4gIH1cblxuICBjaGVja0xpc3QodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrSW5kZXhlcyA9IHRoaXMuY2hlY2tJbmRleGVzLm1hcChpbmRleCA9PiB2YWx1ZSk7XG4gIH1cblxuICBkZWxldGVBbGwoKTogdm9pZCB7XG4gICAgLy8gY29uc3Qgb2JzID0gW107XG4gICAgLy8gdGhpcy5jaGVja0luZGV4ZXMuZm9yRWFjaCgoY2hlY2tlZDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIC8vICAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAvLyAgICAgY29uc3QgaWQgPSB0aGlzLmRhdGFzW2luZGV4XS5pZDtcbiAgICAvLyAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgIC8vICAgICB9O1xuICAgIC8vICAgICBwYXJhbXNbYCR7dGhpcy5tb2RlbH1faWRgXSA9IGlkO1xuICAgIC8vICAgICB0aGlzLmRhdGFfc2VydmljZS5kZWxldGUoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5zZXREYXRhKHRoaXMucmVzb3VyY2UsIGRhdGEpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICB9XG5cbiAgYmF0Y2hVcGRhdGUodXBkYXRlX3BhcmFtczogQW55T2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3Qgb2JzID0gW107XG4gICAgdGhpcy5jaGVja0luZGV4ZXMuZm9yRWFjaCgoY2hlY2tlZDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXBkYXRlX3BhcmFtcykge1xuICAgICAgICAgIGlmICh1cGRhdGVfcGFyYW1zW2tleV0gPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgdXBkYXRlX3BhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZGF0YXNbaW5kZXhdLmlkO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgdXBkYXRlOiB1cGRhdGVfcGFyYW1zXG4gICAgICAgIH07XG4gICAgICAgIHBhcmFtc1tgJHt0aGlzLm1vZGVsfV9pZGBdID0gaWQ7XG4gICAgICAgIG9icy5wdXNoKHRoaXMuZGF0YV9zZXJ2aWNlLnVwZGF0ZShwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3JrSm9pbihvYnMpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==