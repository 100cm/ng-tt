/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CommonDataTableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CommonDataTableComponent, _super);
    function CommonDataTableComponent() {
        var _this = _super.call(this) || this;
        _this.columns = [];
        _this.Model = '';
        _this.resource = '';
        _this.search_columns = [];
        _this.prefixRoute = '/dashboard';
        // 搜索参数
        _this.search_params = {};
        _this.onSearch = new EventEmitter();
        _this.search_paramsChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loadData();
    };
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.data_service[this.resource](this.send_param).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.setData(_this.resource, data);
        }));
    };
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        _super.prototype.search.call(this);
        this.onSearch.emit();
    };
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.changeSearchParams = /**
     * @return {?}
     */
    function () {
        this.search_paramsChange.emit(this.search_params);
    };
    Object.defineProperty(CommonDataTableComponent.prototype, "model", {
        get: /**
         * @return {?}
         */
        function () {
            return this.Model.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    CommonDataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-common-data-table',
                    template: "\n    <tt-search-group [search_columns]=\"search_columns\" [extra_search]=\"extra_search\" [(ngModel)]=\"search_params\"\n                     (ngModelChange)=\"changeSearchParams()\"\n                     (onSearch)=\"search()\"></tt-search-group>\n    <at-table>\n      <thead at-thead>\n      <tr>\n        <th *ngFor=\"let item of columns\" at-th style=\"cursor: text;\">\n          <tt-i18n [t]=\"'Model.'+ Model+'.'+item.name\"></tt-i18n>\n        </th>\n        <th at-th>\u64CD\u4F5C</th>\n      </tr>\n      </thead>\n      <tbody at-tbody>\n      <tr at-tbody-tr *ngFor=\"let item of datas\"><!---->\n        <td at-td *ngFor=\"let column of columns\">\n          <ng-container *ngIf=\"column.resource_key\">\n            <a\n              [routerLink]=\"prefixRoute +'/'+column.resource +'/' + (item | nestedJsonKey : column.resource_key)\">\n              {{item | nestedJsonKey : column.key}}</a>\n          </ng-container>\n          <ng-container *ngIf=\"!column.resource_key\">\n            {{item | nestedJsonKey : column.key}}\n          </ng-container>\n        </td>\n        <td at-td>\n          <a [routerLink]=\"prefixRoute +'/'+resource +'/edit/' + item.id\">\n            <tt-i18n [t]=\"'Model.Handle.edit'\"></tt-i18n>\n          </a>\n          <at-divider [vertical]=\"true\"></at-divider>\n          <ng-template [ngTemplateOutlet]=\"handle_columns\" [ngTemplateOutletContext]=\"{$implicit: item}\"></ng-template>\n        </td>\n      </tr>\n\n      </tbody>\n      <div footer>\n        <tt-empty-data [data]=\"datas\"></tt-empty-data>\n        <div class=\"page-container\">\n          <at-pagination [atPageSizer]=\"true\" (pageSizeChange)=\"pageSizeChange($event)\" [pageSize]=\"per\"\n                         [atQuickJump]=\"true\"\n                         [atPageIndex]=\"page\"\n                         [total]=\"total_count\"\n                         (pageIndexChange)=\"pageChange($event)\"></at-pagination>\n        </div>\n      </div>\n    </at-table>\n  ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CommonDataTableComponent.ctorParameters = function () { return []; };
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
    return CommonDataTableComponent;
}(DataBaseComponent));
export { CommonDataTableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUd2RSwyQ0FLQzs7O0lBSkMscUNBQWE7O0lBQ2Isb0NBQVk7O0lBQ1oseUNBQWtCOztJQUNsQiw2Q0FBc0I7O0FBR3hCO0lBbUQ4QyxvREFBaUI7SUFFN0Q7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFRUSxhQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUN0QyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBS3BCLGlCQUFXLEdBQUcsWUFBWSxDQUFDOztRQUUzQixtQkFBYSxHQUFpQixFQUFFLENBQUM7UUFFdkIsY0FBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELHlCQUFtQixHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQXJCeEYsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBbUJELDJDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDOUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlDQUFNOzs7SUFBTjtRQUNFLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQscURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTs7Z0JBL0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsbzlEQThDVDs7aUJBRUY7Ozs7OytCQVlFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FFTCxLQUFLOytCQUVMLEtBQUs7OEJBQ0wsS0FBSztnQ0FFTCxLQUFLOzJCQUVMLE1BQU07c0NBQ04sTUFBTTs7SUFxQlQsK0JBQUM7Q0FBQSxBQWpHRCxDQW1EOEMsaUJBQWlCLEdBOEM5RDtTQTlDWSx3QkFBd0I7OztJQVduQyxnREFBMkI7O0lBQzNCLDJDQUErQzs7SUFDL0MseUNBQW9COztJQUNwQiw0Q0FBdUI7O0lBQ3ZCLGtEQUE2Qjs7SUFFN0Isa0RBQXlEOztJQUV6RCxnREFBdUQ7O0lBQ3ZELCtDQUFvQzs7SUFFcEMsaURBQTBDOztJQUUxQyw0Q0FBcUU7O0lBQ3JFLHVEQUF3RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2RhdGEtYmFzZS9kYXRhYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hbnktb2JqZWN0LmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uRGF0YVRhYmxlQ29sdW1uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgcmVzb3VyY2U/OiBzdHJpbmc7XG4gIHJlc291cmNlX2tleT86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHQtY29tbW9uLWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0dC1zZWFyY2gtZ3JvdXAgW3NlYXJjaF9jb2x1bW5zXT1cInNlYXJjaF9jb2x1bW5zXCIgW2V4dHJhX3NlYXJjaF09XCJleHRyYV9zZWFyY2hcIiBbKG5nTW9kZWwpXT1cInNlYXJjaF9wYXJhbXNcIlxuICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlU2VhcmNoUGFyYW1zKClcIlxuICAgICAgICAgICAgICAgICAgICAgKG9uU2VhcmNoKT1cInNlYXJjaCgpXCI+PC90dC1zZWFyY2gtZ3JvdXA+XG4gICAgPGF0LXRhYmxlPlxuICAgICAgPHRoZWFkIGF0LXRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29sdW1uc1wiIGF0LXRoIHN0eWxlPVwiY3Vyc29yOiB0ZXh0O1wiPlxuICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC4nKyBNb2RlbCsnLicraXRlbS5uYW1lXCI+PC90dC1pMThuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGggYXQtdGg+5pON5L2cPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IGF0LXRib2R5PlxuICAgICAgPHRyIGF0LXRib2R5LXRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzXCI+PCEtLS0tPlxuICAgICAgICA8dGQgYXQtdGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5yZXNvdXJjZV9rZXlcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cInByZWZpeFJvdXRlICsnLycrY29sdW1uLnJlc291cmNlICsnLycgKyAoaXRlbSB8IG5lc3RlZEpzb25LZXkgOiBjb2x1bW4ucmVzb3VyY2Vfa2V5KVwiPlxuICAgICAgICAgICAgICB7e2l0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleX19PC9hPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLnJlc291cmNlX2tleVwiPlxuICAgICAgICAgICAge3tpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5rZXl9fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgYXQtdGQ+XG4gICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwicHJlZml4Um91dGUgKycvJytyZXNvdXJjZSArJy9lZGl0LycgKyBpdGVtLmlkXCI+XG4gICAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuSGFuZGxlLmVkaXQnXCI+PC90dC1pMThuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiPjwvYXQtZGl2aWRlcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGFuZGxlX2NvbHVtbnNcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgICAgPC90Ym9keT5cbiAgICAgIDxkaXYgZm9vdGVyPlxuICAgICAgICA8dHQtZW1wdHktZGF0YSBbZGF0YV09XCJkYXRhc1wiPjwvdHQtZW1wdHktZGF0YT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGF0LXBhZ2luYXRpb24gW2F0UGFnZVNpemVyXT1cInRydWVcIiAocGFnZVNpemVDaGFuZ2UpPVwicGFnZVNpemVDaGFuZ2UoJGV2ZW50KVwiIFtwYWdlU2l6ZV09XCJwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthdFF1aWNrSnVtcF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYXRQYWdlSW5kZXhdPVwicGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3RvdGFsXT1cInRvdGFsX2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUluZGV4Q2hhbmdlKT1cInBhZ2VDaGFuZ2UoJGV2ZW50KVwiPjwvYXQtcGFnaW5hdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2F0LXRhYmxlPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkRhdGFUYWJsZUNvbXBvbmVudCBleHRlbmRzIERhdGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBkYXRhX3NlcnZpY2U6IGFueTtcbiAgQElucHV0KCkgY29sdW1uczogQ29tbW9uRGF0YVRhYmxlQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgTW9kZWwgPSAnJztcbiAgQElucHV0KCkgcmVzb3VyY2UgPSAnJztcbiAgQElucHV0KCkgc2VhcmNoX2NvbHVtbnMgPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBoYW5kbGVfY29sdW1uczogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBleHRyYV9zZWFyY2g6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT47XG4gIEBJbnB1dCgpIHByZWZpeFJvdXRlID0gJy9kYXNoYm9hcmQnO1xuICAvLyDmkJzntKLlj4LmlbBcbiAgQElucHV0KCkgc2VhcmNoX3BhcmFtczogU2VhcmNoUGFyYW1zID0ge307XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWFyY2hfcGFyYW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U2VhcmNoUGFyYW1zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkRGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFfc2VydmljZVt0aGlzLnJlc291cmNlXSh0aGlzLnNlbmRfcGFyYW0pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLnJlc291cmNlLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICBzdXBlci5zZWFyY2goKTtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoKTtcbiAgfVxuXG4gIGNoYW5nZVNlYXJjaFBhcmFtcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaF9wYXJhbXNDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuICB9XG5cbiAgZ2V0IG1vZGVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuTW9kZWwudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG59XG4iXX0=