/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { DataBaseComponent } from '../../data-base/database.component';
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
}
CommonDataTableComponent.decorators = [
    { type: Component, args: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBR3ZFLDJDQVFDOzs7SUFQQyxxQ0FBYTs7SUFDYixvQ0FBWTs7SUFDWix5Q0FBa0I7O0lBQ2xCLDZDQUFzQjs7SUFDdEIsc0NBQWdCOztJQUNoQiwwQ0FBbUI7O0lBQ25CLDJDQUFxQzs7QUErRHZDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7SUFFN0Q7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVNELFlBQU8sR0FBNEIsRUFBRSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFLcEIsZ0JBQVcsR0FBRyxZQUFZLENBQUM7O1FBRTNCLGtCQUFhLEdBQWlCLEVBQUUsQ0FBQztRQUV2QixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsd0JBQW1CLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7SUFyQnhGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFtQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELE1BQU07UUFDSixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUF4R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVEVDs7YUFFRjs7Ozs7MkJBWUUsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSzswQkFDTCxLQUFLOzRCQUVMLEtBQUs7dUJBRUwsTUFBTTtrQ0FDTixNQUFNOzs7O0lBZFAsZ0RBQTJCOztJQUMzQiwyQ0FBK0M7O0lBQy9DLHlDQUFvQjs7SUFDcEIsNENBQXVCOztJQUN2QixrREFBNkI7O0lBRTdCLGtEQUF5RDs7SUFFekQsZ0RBQXVEOztJQUN2RCwrQ0FBb0M7O0lBRXBDLGlEQUEwQzs7SUFFMUMsNENBQXFFOztJQUNyRSx1REFBd0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kYXRhLWJhc2UvZGF0YWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1vbkRhdGFUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIHJlc291cmNlPzogc3RyaW5nO1xuICByZXNvdXJjZV9rZXk/OiBzdHJpbmc7XG4gIGFycmF5PzogYm9vbGVhbjtcbiAgYXJyYXlfa2V5Pzogc3RyaW5nO1xuICBkaWN0aW9uYXJ5PzogeyBbeDogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R0LWNvbW1vbi1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dHQtc2VhcmNoLWdyb3VwIFtzZWFyY2hfY29sdW1uc109XCJzZWFyY2hfY29sdW1uc1wiIFtleHRyYV9zZWFyY2hdPVwiZXh0cmFfc2VhcmNoXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zXCJcbiAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVNlYXJjaFBhcmFtcygpXCJcbiAgICAgICAgICAgICAgICAgICAgIChvblNlYXJjaCk9XCJzZWFyY2goKVwiPjwvdHQtc2VhcmNoLWdyb3VwPlxuICAgIDxhdC10YWJsZT5cbiAgICAgIDx0aGVhZCBhdC10aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbHVtbnNcIiBhdC10aCBzdHlsZT1cImN1cnNvcjogdGV4dDtcIj5cbiAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuJysgTW9kZWwrJy4nK2l0ZW0ubmFtZVwiPjwvdHQtaTE4bj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRoIGF0LXRoPuaTjeS9nDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBhdC10Ym9keT5cbiAgICAgIDx0ciBhdC10Ym9keS10ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhc1wiPjwhLS0tLT5cbiAgICAgICAgPHRkIGF0LXRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4ucmVzb3VyY2Vfa2V5XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJwcmVmaXhSb3V0ZSArJy8nK2NvbHVtbi5yZXNvdXJjZSArJy8nICsgKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLnJlc291cmNlX2tleSlcIj5cbiAgICAgICAgICAgICAge3tpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5rZXl9fTwvYT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5yZXNvdXJjZV9rZXlcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uYXJyYXlcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW5fYXJyYXlfaXRlbSBvZiAgKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleSk7bGFzdCBhcyBpc0xhc3RcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57e2NvbHVtbi5kaWN0aW9uYXJ5ID8gY29sdW1uLmRpY3Rpb25hcnlbY29sdW1uX2FycmF5X2l0ZW1bY29sdW1uLmFycmF5X2tleV1dIDogY29sdW1uX2FycmF5X2l0ZW1bY29sdW1uLmFycmF5X2tleV19fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIiAqbmdJZj1cIiFpc0xhc3RcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5hcnJheVwiPlxuICAgICAgICAgICAgICB7e2NvbHVtbi5kaWN0aW9uYXJ5ID8gY29sdW1uLmRpY3Rpb25hcnlbKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleSldIDogKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleSl9fVxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBhdC10ZD5cbiAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJwcmVmaXhSb3V0ZSArJy8nK3Jlc291cmNlICsnL2VkaXQvJyArIGl0ZW0uaWRcIj5cbiAgICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC5IYW5kbGUuZWRpdCdcIj48L3R0LWkxOG4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhdC1kaXZpZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCIgKm5nSWY9XCJoYW5kbGVfY29sdW1uc1wiPjwvYXQtZGl2aWRlcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGFuZGxlX2NvbHVtbnNcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgICAgPC90Ym9keT5cbiAgICAgIDxkaXYgZm9vdGVyPlxuICAgICAgICA8dHQtZW1wdHktZGF0YSBbZGF0YV09XCJkYXRhc1wiPjwvdHQtZW1wdHktZGF0YT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGF0LXBhZ2luYXRpb24gW2F0UGFnZVNpemVyXT1cInRydWVcIiAocGFnZVNpemVDaGFuZ2UpPVwicGFnZVNpemVDaGFuZ2UoJGV2ZW50KVwiIFtwYWdlU2l6ZV09XCJwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthdFF1aWNrSnVtcF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYXRQYWdlSW5kZXhdPVwicGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3RvdGFsXT1cInRvdGFsX2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUluZGV4Q2hhbmdlKT1cInBhZ2VDaGFuZ2UoJGV2ZW50KVwiPjwvYXQtcGFnaW5hdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2F0LXRhYmxlPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkRhdGFUYWJsZUNvbXBvbmVudCBleHRlbmRzIERhdGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBkYXRhX3NlcnZpY2U6IGFueTtcbiAgQElucHV0KCkgY29sdW1uczogQ29tbW9uRGF0YVRhYmxlQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgTW9kZWwgPSAnJztcbiAgQElucHV0KCkgcmVzb3VyY2UgPSAnJztcbiAgQElucHV0KCkgc2VhcmNoX2NvbHVtbnMgPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBoYW5kbGVfY29sdW1uczogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBleHRyYV9zZWFyY2g6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT47XG4gIEBJbnB1dCgpIHByZWZpeFJvdXRlID0gJy9kYXNoYm9hcmQnO1xuICAvLyDmkJzntKLlj4LmlbBcbiAgQElucHV0KCkgc2VhcmNoX3BhcmFtczogU2VhcmNoUGFyYW1zID0ge307XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWFyY2hfcGFyYW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U2VhcmNoUGFyYW1zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkRGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFfc2VydmljZVt0aGlzLnJlc291cmNlXSh0aGlzLnNlbmRfcGFyYW0pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLnJlc291cmNlLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICBzdXBlci5zZWFyY2goKTtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoKTtcbiAgfVxuXG4gIGNoYW5nZVNlYXJjaFBhcmFtcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaF9wYXJhbXNDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuICB9XG5cbiAgZ2V0IG1vZGVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuTW9kZWwudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG59XG4iXX0=