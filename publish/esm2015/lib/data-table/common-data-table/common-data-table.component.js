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
            {{item | nestedJsonKey : column.key}}
          </ng-container>
        </td>
        <td at-td>
          <a [routerLink]="prefixRoute +'/'+resource +'/edit/' + item.id">
            <tt-i18n [t]="'Model.Handle.edit'"></tt-i18n>
          </a>
          <at-divider [vertical]="true"></at-divider>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBR3ZFLDJDQUtDOzs7SUFKQyxxQ0FBYTs7SUFDYixvQ0FBWTs7SUFDWix5Q0FBa0I7O0lBQ2xCLDZDQUFzQjs7QUFzRHhCLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7SUFFN0Q7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVNELFlBQU8sR0FBNEIsRUFBRSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFLcEIsZ0JBQVcsR0FBRyxZQUFZLENBQUM7O1FBRTNCLGtCQUFhLEdBQWlCLEVBQUUsQ0FBQztRQUV2QixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsd0JBQW1CLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7SUFyQnhGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFtQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELE1BQU07UUFDSixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUEvRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDVDs7YUFFRjs7Ozs7MkJBWUUsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSzswQkFDTCxLQUFLOzRCQUVMLEtBQUs7dUJBRUwsTUFBTTtrQ0FDTixNQUFNOzs7O0lBZFAsZ0RBQTJCOztJQUMzQiwyQ0FBK0M7O0lBQy9DLHlDQUFvQjs7SUFDcEIsNENBQXVCOztJQUN2QixrREFBNkI7O0lBRTdCLGtEQUF5RDs7SUFFekQsZ0RBQXVEOztJQUN2RCwrQ0FBb0M7O0lBRXBDLGlEQUEwQzs7SUFFMUMsNENBQXFFOztJQUNyRSx1REFBd0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kYXRhLWJhc2UvZGF0YWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1vbkRhdGFUYWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIHJlc291cmNlPzogc3RyaW5nO1xuICByZXNvdXJjZV9rZXk/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R0LWNvbW1vbi1kYXRhLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dHQtc2VhcmNoLWdyb3VwIFtzZWFyY2hfY29sdW1uc109XCJzZWFyY2hfY29sdW1uc1wiIFtleHRyYV9zZWFyY2hdPVwiZXh0cmFfc2VhcmNoXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hfcGFyYW1zXCJcbiAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVNlYXJjaFBhcmFtcygpXCJcbiAgICAgICAgICAgICAgICAgICAgIChvblNlYXJjaCk9XCJzZWFyY2goKVwiPjwvdHQtc2VhcmNoLWdyb3VwPlxuICAgIDxhdC10YWJsZT5cbiAgICAgIDx0aGVhZCBhdC10aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbHVtbnNcIiBhdC10aCBzdHlsZT1cImN1cnNvcjogdGV4dDtcIj5cbiAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuJysgTW9kZWwrJy4nK2l0ZW0ubmFtZVwiPjwvdHQtaTE4bj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRoIGF0LXRoPuaTjeS9nDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBhdC10Ym9keT5cbiAgICAgIDx0ciBhdC10Ym9keS10ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhc1wiPjwhLS0tLT5cbiAgICAgICAgPHRkIGF0LXRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4ucmVzb3VyY2Vfa2V5XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJwcmVmaXhSb3V0ZSArJy8nK2NvbHVtbi5yZXNvdXJjZSArJy8nICsgKGl0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLnJlc291cmNlX2tleSlcIj5cbiAgICAgICAgICAgICAge3tpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5rZXl9fTwvYT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5yZXNvdXJjZV9rZXlcIj5cbiAgICAgICAgICAgIHt7aXRlbSB8IG5lc3RlZEpzb25LZXkgOiBjb2x1bW4ua2V5fX1cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGF0LXRkPlxuICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cInByZWZpeFJvdXRlICsnLycrcmVzb3VyY2UgKycvZWRpdC8nICsgaXRlbS5pZFwiPlxuICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkhhbmRsZS5lZGl0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhhbmRsZV9jb2x1bW5zXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8ZGl2IGZvb3Rlcj5cbiAgICAgICAgPHR0LWVtcHR5LWRhdGEgW2RhdGFdPVwiZGF0YXNcIj48L3R0LWVtcHR5LWRhdGE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxhdC1wYWdpbmF0aW9uIFthdFBhZ2VTaXplcl09XCJ0cnVlXCIgKHBhZ2VTaXplQ2hhbmdlKT1cInBhZ2VTaXplQ2hhbmdlKCRldmVudClcIiBbcGFnZVNpemVdPVwicGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYXRRdWlja0p1bXBdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2F0UGFnZUluZGV4XT1cInBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFt0b3RhbF09XCJ0b3RhbF9jb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2VJbmRleENoYW5nZSk9XCJwYWdlQ2hhbmdlKCRldmVudClcIj48L2F0LXBhZ2luYXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hdC10YWJsZT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25EYXRhVGFibGVDb21wb25lbnQgZXh0ZW5kcyBEYXRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgZGF0YV9zZXJ2aWNlOiBhbnk7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IENvbW1vbkRhdGFUYWJsZUNvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIE1vZGVsID0gJyc7XG4gIEBJbnB1dCgpIHJlc291cmNlID0gJyc7XG4gIEBJbnB1dCgpIHNlYXJjaF9jb2x1bW5zID0gW107XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgaGFuZGxlX2NvbHVtbnM6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgZXh0cmFfc2VhcmNoOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+O1xuICBASW5wdXQoKSBwcmVmaXhSb3V0ZSA9ICcvZGFzaGJvYXJkJztcbiAgLy8g5pCc57Si5Y+C5pWwXG4gIEBJbnB1dCgpIHNlYXJjaF9wYXJhbXM6IFNlYXJjaFBhcmFtcyA9IHt9O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VhcmNoX3BhcmFtc0NoYW5nZTogRXZlbnRFbWl0dGVyPFNlYXJjaFBhcmFtcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhX3NlcnZpY2VbdGhpcy5yZXNvdXJjZV0odGhpcy5zZW5kX3BhcmFtKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEodGhpcy5yZXNvdXJjZSwgZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2goKTogdm9pZCB7XG4gICAgc3VwZXIuc2VhcmNoKCk7XG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KCk7XG4gIH1cblxuICBjaGFuZ2VTZWFyY2hQYXJhbXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hfcGFyYW1zQ2hhbmdlLmVtaXQodGhpcy5zZWFyY2hfcGFyYW1zKTtcbiAgfVxuXG4gIGdldCBtb2RlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLk1vZGVsLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxufVxuIl19