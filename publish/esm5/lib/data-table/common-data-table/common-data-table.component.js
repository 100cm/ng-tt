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
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.array;
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.array_key;
    /** @type {?|undefined} */
    CommonDataTableColumn.prototype.dictionary;
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
                    template: "\n    <tt-search-group [search_columns]=\"search_columns\" [extra_search]=\"extra_search\" [(ngModel)]=\"search_params\"\n                     (ngModelChange)=\"changeSearchParams()\"\n                     (onSearch)=\"search()\"></tt-search-group>\n    <at-table>\n      <thead at-thead>\n      <tr>\n        <th *ngFor=\"let item of columns\" at-th style=\"cursor: text;\">\n          <tt-i18n [t]=\"'Model.'+ Model+'.'+item.name\"></tt-i18n>\n        </th>\n        <th at-th>\u64CD\u4F5C</th>\n      </tr>\n      </thead>\n      <tbody at-tbody>\n      <tr at-tbody-tr *ngFor=\"let item of datas\"><!---->\n        <td at-td *ngFor=\"let column of columns\">\n          <ng-container *ngIf=\"column.resource_key\">\n            <a\n              [routerLink]=\"prefixRoute +'/'+column.resource +'/' + (item | nestedJsonKey : column.resource_key)\">\n              {{item | nestedJsonKey : column.key}}</a>\n          </ng-container>\n          <ng-container *ngIf=\"!column.resource_key\">\n            <ng-container *ngIf=\"column.array\">\n              <ng-container\n                *ngFor=\"let column_array_item of  (item | nestedJsonKey : column.key);last as isLast\">\n                <span>{{column.dictionary ? column.dictionary[column_array_item[column.array_key]] : column_array_item[column.array_key]}} </span>\n                <at-divider [vertical]=\"true\" *ngIf=\"!isLast\"></at-divider>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"!column.array\">\n              {{column.dictionary ? column.dictionary[(item | nestedJsonKey : column.key)] : (item | nestedJsonKey : column.key)}}\n            </ng-container>\n          </ng-container>\n        </td>\n        <td at-td>\n          <a [routerLink]=\"prefixRoute +'/'+resource +'/edit/' + item.id\">\n            <tt-i18n [t]=\"'Model.Handle.edit'\"></tt-i18n>\n          </a>\n          <at-divider [vertical]=\"true\" *ngIf=\"handle_columns\"></at-divider>\n          <ng-template [ngTemplateOutlet]=\"handle_columns\" [ngTemplateOutletContext]=\"{$implicit: item}\"></ng-template>\n        </td>\n      </tr>\n\n      </tbody>\n      <div footer>\n        <tt-empty-data [data]=\"datas\"></tt-empty-data>\n        <div class=\"page-container\">\n          <at-pagination [atPageSizer]=\"true\" (pageSizeChange)=\"pageSizeChange($event)\" [pageSize]=\"per\"\n                         [atQuickJump]=\"true\"\n                         [atPageIndex]=\"page\"\n                         [total]=\"total_count\"\n                         (pageIndexChange)=\"pageChange($event)\"></at-pagination>\n        </div>\n      </div>\n    </at-table>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUd2RSwyQ0FRQzs7O0lBUEMscUNBQWE7O0lBQ2Isb0NBQVk7O0lBQ1oseUNBQWtCOztJQUNsQiw2Q0FBc0I7O0lBQ3RCLHNDQUFnQjs7SUFDaEIsMENBQW1COztJQUNuQiwyQ0FBcUM7O0FBR3ZDO0lBNEQ4QyxvREFBaUI7SUFFN0Q7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFRUSxhQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUN0QyxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBS3BCLGlCQUFXLEdBQUcsWUFBWSxDQUFDOztRQUUzQixtQkFBYSxHQUFpQixFQUFFLENBQUM7UUFFdkIsY0FBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELHlCQUFtQixHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQXJCeEYsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBbUJELDJDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDOUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlDQUFNOzs7SUFBTjtRQUNFLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQscURBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTs7Z0JBeEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMG1GQXVEVDs7aUJBRUY7Ozs7OytCQVlFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FFTCxLQUFLOytCQUVMLEtBQUs7OEJBQ0wsS0FBSztnQ0FFTCxLQUFLOzJCQUVMLE1BQU07c0NBQ04sTUFBTTs7SUFxQlQsK0JBQUM7Q0FBQSxBQTFHRCxDQTREOEMsaUJBQWlCLEdBOEM5RDtTQTlDWSx3QkFBd0I7OztJQVduQyxnREFBMkI7O0lBQzNCLDJDQUErQzs7SUFDL0MseUNBQW9COztJQUNwQiw0Q0FBdUI7O0lBQ3ZCLGtEQUE2Qjs7SUFFN0Isa0RBQXlEOztJQUV6RCxnREFBdUQ7O0lBQ3ZELCtDQUFvQzs7SUFFcEMsaURBQTBDOztJQUUxQyw0Q0FBcUU7O0lBQ3JFLHVEQUF3RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2RhdGEtYmFzZS9kYXRhYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9hbnktb2JqZWN0LmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uRGF0YVRhYmxlQ29sdW1uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgcmVzb3VyY2U/OiBzdHJpbmc7XG4gIHJlc291cmNlX2tleT86IHN0cmluZztcbiAgYXJyYXk/OiBib29sZWFuO1xuICBhcnJheV9rZXk/OiBzdHJpbmc7XG4gIGRpY3Rpb25hcnk/OiB7IFt4OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHQtY29tbW9uLWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0dC1zZWFyY2gtZ3JvdXAgW3NlYXJjaF9jb2x1bW5zXT1cInNlYXJjaF9jb2x1bW5zXCIgW2V4dHJhX3NlYXJjaF09XCJleHRyYV9zZWFyY2hcIiBbKG5nTW9kZWwpXT1cInNlYXJjaF9wYXJhbXNcIlxuICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlU2VhcmNoUGFyYW1zKClcIlxuICAgICAgICAgICAgICAgICAgICAgKG9uU2VhcmNoKT1cInNlYXJjaCgpXCI+PC90dC1zZWFyY2gtZ3JvdXA+XG4gICAgPGF0LXRhYmxlPlxuICAgICAgPHRoZWFkIGF0LXRoZWFkPlxuICAgICAgPHRyPlxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29sdW1uc1wiIGF0LXRoIHN0eWxlPVwiY3Vyc29yOiB0ZXh0O1wiPlxuICAgICAgICAgIDx0dC1pMThuIFt0XT1cIidNb2RlbC4nKyBNb2RlbCsnLicraXRlbS5uYW1lXCI+PC90dC1pMThuPlxuICAgICAgICA8L3RoPlxuICAgICAgICA8dGggYXQtdGg+5pON5L2cPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IGF0LXRib2R5PlxuICAgICAgPHRyIGF0LXRib2R5LXRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzXCI+PCEtLS0tPlxuICAgICAgICA8dGQgYXQtdGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5yZXNvdXJjZV9rZXlcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cInByZWZpeFJvdXRlICsnLycrY29sdW1uLnJlc291cmNlICsnLycgKyAoaXRlbSB8IG5lc3RlZEpzb25LZXkgOiBjb2x1bW4ucmVzb3VyY2Vfa2V5KVwiPlxuICAgICAgICAgICAgICB7e2l0ZW0gfCBuZXN0ZWRKc29uS2V5IDogY29sdW1uLmtleX19PC9hPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLnJlc291cmNlX2tleVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5hcnJheVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbl9hcnJheV9pdGVtIG9mICAoaXRlbSB8IG5lc3RlZEpzb25LZXkgOiBjb2x1bW4ua2V5KTtsYXN0IGFzIGlzTGFzdFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7Y29sdW1uLmRpY3Rpb25hcnkgPyBjb2x1bW4uZGljdGlvbmFyeVtjb2x1bW5fYXJyYXlfaXRlbVtjb2x1bW4uYXJyYXlfa2V5XV0gOiBjb2x1bW5fYXJyYXlfaXRlbVtjb2x1bW4uYXJyYXlfa2V5XX19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiICpuZ0lmPVwiIWlzTGFzdFwiPjwvYXQtZGl2aWRlcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmFycmF5XCI+XG4gICAgICAgICAgICAgIHt7Y29sdW1uLmRpY3Rpb25hcnkgPyBjb2x1bW4uZGljdGlvbmFyeVsoaXRlbSB8IG5lc3RlZEpzb25LZXkgOiBjb2x1bW4ua2V5KV0gOiAoaXRlbSB8IG5lc3RlZEpzb25LZXkgOiBjb2x1bW4ua2V5KX19XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGF0LXRkPlxuICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cInByZWZpeFJvdXRlICsnLycrcmVzb3VyY2UgKycvZWRpdC8nICsgaXRlbS5pZFwiPlxuICAgICAgICAgICAgPHR0LWkxOG4gW3RdPVwiJ01vZGVsLkhhbmRsZS5lZGl0J1wiPjwvdHQtaTE4bj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGF0LWRpdmlkZXIgW3ZlcnRpY2FsXT1cInRydWVcIiAqbmdJZj1cImhhbmRsZV9jb2x1bW5zXCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJoYW5kbGVfY29sdW1uc1wiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7JGltcGxpY2l0OiBpdGVtfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgICA8L3Rib2R5PlxuICAgICAgPGRpdiBmb290ZXI+XG4gICAgICAgIDx0dC1lbXB0eS1kYXRhIFtkYXRhXT1cImRhdGFzXCI+PC90dC1lbXB0eS1kYXRhPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8YXQtcGFnaW5hdGlvbiBbYXRQYWdlU2l6ZXJdPVwidHJ1ZVwiIChwYWdlU2l6ZUNoYW5nZSk9XCJwYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCIgW3BhZ2VTaXplXT1cInBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2F0UXVpY2tKdW1wXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthdFBhZ2VJbmRleF09XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbdG90YWxdPVwidG90YWxfY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlSW5kZXhDaGFuZ2UpPVwicGFnZUNoYW5nZSgkZXZlbnQpXCI+PC9hdC1wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXQtdGFibGU+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1kYXRhLXRhYmxlLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uRGF0YVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgRGF0YUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWREYXRhKCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGRhdGFfc2VydmljZTogYW55O1xuICBASW5wdXQoKSBjb2x1bW5zOiBDb21tb25EYXRhVGFibGVDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBNb2RlbCA9ICcnO1xuICBASW5wdXQoKSByZXNvdXJjZSA9ICcnO1xuICBASW5wdXQoKSBzZWFyY2hfY29sdW1ucyA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGhhbmRsZV9jb2x1bW5zOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGV4dHJhX3NlYXJjaDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcbiAgQElucHV0KCkgcHJlZml4Um91dGUgPSAnL2Rhc2hib2FyZCc7XG4gIC8vIOaQnOe0ouWPguaVsFxuICBASW5wdXQoKSBzZWFyY2hfcGFyYW1zOiBTZWFyY2hQYXJhbXMgPSB7fTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlYXJjaF9wYXJhbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTZWFyY2hQYXJhbXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxvYWREYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YV9zZXJ2aWNlW3RoaXMucmVzb3VyY2VdKHRoaXMuc2VuZF9wYXJhbSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHRoaXMucmVzb3VyY2UsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHN1cGVyLnNlYXJjaCgpO1xuICAgIHRoaXMub25TZWFyY2guZW1pdCgpO1xuICB9XG5cbiAgY2hhbmdlU2VhcmNoUGFyYW1zKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoX3BhcmFtc0NoYW5nZS5lbWl0KHRoaXMuc2VhcmNoX3BhcmFtcyk7XG4gIH1cblxuICBnZXQgbW9kZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5Nb2RlbC50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbn1cbiJdfQ==