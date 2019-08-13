/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CommonDataTableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CommonDataTableComponent, _super);
    function CommonDataTableComponent() {
        var _this = _super.call(this) || this;
        _this.columns = [];
        _this.Model = '';
        _this.resource = '';
        _this.search_columns = [];
        _this.edit_columns = [];
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
    /**
     * @param {?} check
     * @return {?}
     */
    CommonDataTableComponent.prototype.changeCheckIndex = /**
     * @param {?} check
     * @return {?}
     */
    function (check) {
        this.checkAll = this.checkIndexes.filter((/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return index === true; })).length === this.datas.length;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CommonDataTableComponent.prototype.checkList = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkIndexes = this.checkIndexes.map((/**
         * @param {?} index
         * @return {?}
         */
        function (index) { return value; }));
    };
    /**
     * @return {?}
     */
    CommonDataTableComponent.prototype.deleteAll = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} update_params
     * @return {?}
     */
    CommonDataTableComponent.prototype.batchUpdate = /**
     * @param {?} update_params
     * @return {?}
     */
    function (update_params) {
        var _this = this;
        /** @type {?} */
        var obs = [];
        this.checkIndexes.forEach((/**
         * @param {?} checked
         * @param {?} index
         * @return {?}
         */
        function (checked, index) {
            if (checked === true) {
                for (var key in update_params) {
                    if (update_params[key] === '') {
                        delete update_params[key];
                    }
                }
                /** @type {?} */
                var id = _this.datas[index].id;
                /** @type {?} */
                var params = {
                    update: update_params
                };
                params[_this.model + "_id"] = id;
                obs.push(_this.data_service.update(params));
            }
        }));
        forkJoin(obs).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log(data);
        }));
    };
    CommonDataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tt-common-data-table',
                    template: "\n    <tt-search-group [search_columns]=\"search_columns\" [extra_search]=\"extra_search\" [(ngModel)]=\"search_params\"\n                     (delete)=\"deleteAll()\"\n                     (update)=\"batchUpdate($event)\"\n                     [edit_columns]=\"edit_columns\"\n                     (ngModelChange)=\"changeSearchParams()\"\n                     (onSearch)=\"search()\"></tt-search-group>\n    <at-table>\n      <thead at-thead>\n      <tr>\n        <th at-th [atWidth]=\"20\">\n          <at-checkbox [(ngModel)]=\"checkAll\" (changeCheck)=\"checkList($event)\"></at-checkbox>\n        </th>\n        <th *ngFor=\"let item of columns\" at-th style=\"cursor: text;\">\n          <tt-i18n [t]=\"'Model.'+ Model+'.'+item.name\"></tt-i18n>\n        </th>\n        <th at-th>\u64CD\u4F5C</th>\n      </tr>\n      </thead>\n      <tbody at-tbody>\n      <tr at-tbody-tr *ngFor=\"let item of datas;let i = index\"><!---->\n        <td at-td>\n          <at-checkbox [(ngModel)]=\"checkIndexes[i]\" (changeCheck)=\"changeCheckIndex($event)\"></at-checkbox>\n        </td>\n        <td at-td *ngFor=\"let column of columns\">\n          <ng-container *ngIf=\"column.resource_key\">\n            <a\n              [routerLink]=\"prefixRoute +'/'+column.resource +'/' + (item | nestedJsonKey : column.resource_key)\">\n              {{item | nestedJsonKey : column.key}}</a>\n          </ng-container>\n          <ng-container *ngIf=\"!column.resource_key\">\n            <ng-container *ngIf=\"column.array\">\n              <ng-container\n                *ngFor=\"let column_array_item of  (item | nestedJsonKey : column.key);last as isLast\">\n                <span>{{column.dictionary ? column.dictionary[column_array_item[column.array_key]] : column_array_item[column.array_key]}} </span>\n                <at-divider [vertical]=\"true\" *ngIf=\"!isLast\"></at-divider>\n              </ng-container>\n            </ng-container>\n            <ng-container *ngIf=\"!column.array\">\n              {{column.dictionary ? column.dictionary[(item | nestedJsonKey : column.key)] : (item | nestedJsonKey : column.key)}}\n            </ng-container>\n          </ng-container>\n        </td>\n        <td at-td>\n          <a [routerLink]=\"prefixRoute +'/'+resource +'/edit/' + item.id\">\n            <tt-i18n [t]=\"'Model.Handle.edit'\"></tt-i18n>\n          </a>\n          <at-divider [vertical]=\"true\" *ngIf=\"handle_columns\"></at-divider>\n          <ng-template [ngTemplateOutlet]=\"handle_columns\" [ngTemplateOutletContext]=\"{$implicit: item}\"></ng-template>\n        </td>\n      </tr>\n      </tbody>\n      <div footer>\n        <tt-empty-data [data]=\"datas\"></tt-empty-data>\n        <div class=\"page-container\">\n          <at-pagination [atPageSizer]=\"true\" (pageSizeChange)=\"pageSizeChange($event)\" [pageSize]=\"per\"\n                         [atQuickJump]=\"true\"\n                         [atPageIndex]=\"page\"\n                         [total]=\"total_count\"\n                         (pageIndexChange)=\"pageChange($event)\"></at-pagination>\n        </div>\n      </div>\n    </at-table>\n  ",
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
        edit_columns: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRWhDLDJDQVFDOzs7SUFQQyxxQ0FBYTs7SUFDYixvQ0FBWTs7SUFDWix5Q0FBa0I7O0lBQ2xCLDZDQUFzQjs7SUFDdEIsc0NBQWdCOztJQUNoQiwwQ0FBbUI7O0lBQ25CLDJDQUFxQzs7QUFHdkM7SUFvRThDLG9EQUFpQjtJQUU3RDtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQVFRLGFBQU8sR0FBNEIsRUFBRSxDQUFDO1FBQ3RDLFdBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFLbEIsaUJBQVcsR0FBRyxZQUFZLENBQUM7O1FBRTNCLG1CQUFhLEdBQWlCLEVBQUUsQ0FBQztRQUV2QixjQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQseUJBQW1CLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBdEJ4RixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFvQkQsMkNBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsWUFBWSxD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Q0FFTCxLQUFLOytCQUVMLEtBQUs7OEJBQ0wsS0FBSztnQ0FFTCxLQUFLOzJCQUVMLE1BQU07c0NBQ04sTUFBTTs7SUFtRVQsK0JBQUM7Q0FBQSxBQWpLRCxDQW9FOEMsaUJBQWlCLEdBNkY5RDtTQTdGWSx3QkFBd0I7OztJQVduQyxnREFBMkI7O0lBQzNCLDJDQUErQzs7SUFDL0MseUNBQW9COztJQUNwQiw0Q0FBdUI7O0lBQ3ZCLGtEQUE2Qjs7SUFDN0IsZ0RBQTJCOztJQUUzQixrREFBeUQ7O0lBRXpELGdEQUF1RDs7SUFDdkQsK0NBQW9DOztJQUVwQyxpREFBMEM7O0lBRTFDLDRDQUFxRTs7SUFDckUsdURBQXdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZGF0YS1iYXNlL2RhdGFiYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnlPYmplY3QsIFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBDb21tb25EYXRhVGFibGVDb2x1bW4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xuICByZXNvdXJjZT86IHN0cmluZztcbiAgcmVzb3VyY2Vfa2V5Pzogc3RyaW5nO1xuICBhcnJheT86IGJvb2xlYW47XG4gIGFycmF5X2tleT86IHN0cmluZztcbiAgZGljdGlvbmFyeT86IHsgW3g6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0dC1jb21tb24tZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHR0LXNlYXJjaC1ncm91cCBbc2VhcmNoX2NvbHVtbnNdPVwic2VhcmNoX2NvbHVtbnNcIiBbZXh0cmFfc2VhcmNoXT1cImV4dHJhX3NlYXJjaFwiIFsobmdNb2RlbCldPVwic2VhcmNoX3BhcmFtc1wiXG4gICAgICAgICAgICAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZUFsbCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICh1cGRhdGUpPVwiYmF0Y2hVcGRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICBbZWRpdF9jb2x1bW5zXT1cImVkaXRfY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2VTZWFyY2hQYXJhbXMoKVwiXG4gICAgICAgICAgICAgICAgICAgICAob25TZWFyY2gpPVwic2VhcmNoKClcIj48L3R0LXNlYXJjaC1ncm91cD5cbiAgICA8YXQtdGFibGU+XG4gICAgICA8dGhlYWQgYXQtdGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0aCBhdC10aCBbYXRXaWR0aF09XCIyMFwiPlxuICAgICAgICAgIDxhdC1jaGVja2JveCBbKG5nTW9kZWwpXT1cImNoZWNrQWxsXCIgKGNoYW5nZUNoZWNrKT1cImNoZWNrTGlzdCgkZXZlbnQpXCI+PC9hdC1jaGVja2JveD5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbHVtbnNcIiBhdC10aCBzdHlsZT1cImN1cnNvcjogdGV4dDtcIj5cbiAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuJysgTW9kZWwrJy4nK2l0ZW0ubmFtZVwiPjwvdHQtaTE4bj5cbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRoIGF0LXRoPuaTjeS9nDwvdGg+XG4gICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBhdC10Ym9keT5cbiAgICAgIDx0ciBhdC10Ym9keS10ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhcztsZXQgaSA9IGluZGV4XCI+PCEtLS0tPlxuICAgICAgICA8dGQgYXQtdGQ+XG4gICAgICAgICAgPGF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiY2hlY2tJbmRleGVzW2ldXCIgKGNoYW5nZUNoZWNrKT1cImNoYW5nZUNoZWNrSW5kZXgoJGV2ZW50KVwiPjwvYXQtY2hlY2tib3g+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBhdC10ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLnJlc291cmNlX2tleVwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwicHJlZml4Um91dGUgKycvJytjb2x1bW4ucmVzb3VyY2UgKycvJyArIChpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5yZXNvdXJjZV9rZXkpXCI+XG4gICAgICAgICAgICAgIHt7aXRlbSB8IG5lc3RlZEpzb25LZXkgOiBjb2x1bW4ua2V5fX08L2E+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4ucmVzb3VyY2Vfa2V5XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmFycmF5XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sdW1uX2FycmF5X2l0ZW0gb2YgIChpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5rZXkpO2xhc3QgYXMgaXNMYXN0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3tjb2x1bW4uZGljdGlvbmFyeSA/IGNvbHVtbi5kaWN0aW9uYXJ5W2NvbHVtbl9hcnJheV9pdGVtW2NvbHVtbi5hcnJheV9rZXldXSA6IGNvbHVtbl9hcnJheV9pdGVtW2NvbHVtbi5hcnJheV9rZXldfX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhdC1kaXZpZGVyIFt2ZXJ0aWNhbF09XCJ0cnVlXCIgKm5nSWY9XCIhaXNMYXN0XCI+PC9hdC1kaXZpZGVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uYXJyYXlcIj5cbiAgICAgICAgICAgICAge3tjb2x1bW4uZGljdGlvbmFyeSA/IGNvbHVtbi5kaWN0aW9uYXJ5WyhpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5rZXkpXSA6IChpdGVtIHwgbmVzdGVkSnNvbktleSA6IGNvbHVtbi5rZXkpfX1cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgYXQtdGQ+XG4gICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwicHJlZml4Um91dGUgKycvJytyZXNvdXJjZSArJy9lZGl0LycgKyBpdGVtLmlkXCI+XG4gICAgICAgICAgICA8dHQtaTE4biBbdF09XCInTW9kZWwuSGFuZGxlLmVkaXQnXCI+PC90dC1pMThuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YXQtZGl2aWRlciBbdmVydGljYWxdPVwidHJ1ZVwiICpuZ0lmPVwiaGFuZGxlX2NvbHVtbnNcIj48L2F0LWRpdmlkZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhhbmRsZV9jb2x1bW5zXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPGRpdiBmb290ZXI+XG4gICAgICAgIDx0dC1lbXB0eS1kYXRhIFtkYXRhXT1cImRhdGFzXCI+PC90dC1lbXB0eS1kYXRhPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8YXQtcGFnaW5hdGlvbiBbYXRQYWdlU2l6ZXJdPVwidHJ1ZVwiIChwYWdlU2l6ZUNoYW5nZSk9XCJwYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCIgW3BhZ2VTaXplXT1cInBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2F0UXVpY2tKdW1wXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthdFBhZ2VJbmRleF09XCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbdG90YWxdPVwidG90YWxfY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChwYWdlSW5kZXhDaGFuZ2UpPVwicGFnZUNoYW5nZSgkZXZlbnQpXCI+PC9hdC1wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXQtdGFibGU+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1kYXRhLXRhYmxlLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uRGF0YVRhYmxlQ29tcG9uZW50IGV4dGVuZHMgRGF0YUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWREYXRhKCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGRhdGFfc2VydmljZTogYW55O1xuICBASW5wdXQoKSBjb2x1bW5zOiBDb21tb25EYXRhVGFibGVDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBNb2RlbCA9ICcnO1xuICBASW5wdXQoKSByZXNvdXJjZSA9ICcnO1xuICBASW5wdXQoKSBzZWFyY2hfY29sdW1ucyA9IFtdO1xuICBASW5wdXQoKSBlZGl0X2NvbHVtbnMgPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBoYW5kbGVfY29sdW1uczogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBleHRyYV9zZWFyY2g6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT47XG4gIEBJbnB1dCgpIHByZWZpeFJvdXRlID0gJy9kYXNoYm9hcmQnO1xuICAvLyDmkJzntKLlj4LmlbBcbiAgQElucHV0KCkgc2VhcmNoX3BhcmFtczogU2VhcmNoUGFyYW1zID0ge307XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWFyY2hfcGFyYW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U2VhcmNoUGFyYW1zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkRGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFfc2VydmljZVt0aGlzLnJlc291cmNlXSh0aGlzLnNlbmRfcGFyYW0pLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLnJlc291cmNlLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICBzdXBlci5zZWFyY2goKTtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoKTtcbiAgfVxuXG4gIGNoYW5nZVNlYXJjaFBhcmFtcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaF9wYXJhbXNDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaF9wYXJhbXMpO1xuICB9XG5cbiAgZ2V0IG1vZGVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuTW9kZWwudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNoYW5nZUNoZWNrSW5kZXgoY2hlY2s6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQWxsID0gdGhpcy5jaGVja0luZGV4ZXMuZmlsdGVyKGluZGV4ID0+IGluZGV4ID09PSB0cnVlKS5sZW5ndGggPT09IHRoaXMuZGF0YXMubGVuZ3RoO1xuICB9XG5cbiAgY2hlY2tMaXN0KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0luZGV4ZXMgPSB0aGlzLmNoZWNrSW5kZXhlcy5tYXAoaW5kZXggPT4gdmFsdWUpO1xuICB9XG5cbiAgZGVsZXRlQWxsKCk6IHZvaWQge1xuICAgIC8vIGNvbnN0IG9icyA9IFtdO1xuICAgIC8vIHRoaXMuY2hlY2tJbmRleGVzLmZvckVhY2goKGNoZWNrZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAvLyAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XG4gICAgLy8gICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhc1tpbmRleF0uaWQ7XG4gICAgLy8gICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgcGFyYW1zW2Ake3RoaXMubW9kZWx9X2lkYF0gPSBpZDtcbiAgICAvLyAgICAgdGhpcy5kYXRhX3NlcnZpY2UuZGVsZXRlKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLnJlc291cmNlLCBkYXRhKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgfVxuXG4gIGJhdGNoVXBkYXRlKHVwZGF0ZV9wYXJhbXM6IEFueU9iamVjdCk6IHZvaWQge1xuICAgIGNvbnN0IG9icyA9IFtdO1xuICAgIHRoaXMuY2hlY2tJbmRleGVzLmZvckVhY2goKGNoZWNrZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVwZGF0ZV9wYXJhbXMpIHtcbiAgICAgICAgICBpZiAodXBkYXRlX3BhcmFtc1trZXldID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIHVwZGF0ZV9wYXJhbXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmRhdGFzW2luZGV4XS5pZDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgIHVwZGF0ZTogdXBkYXRlX3BhcmFtc1xuICAgICAgICB9O1xuICAgICAgICBwYXJhbXNbYCR7dGhpcy5tb2RlbH1faWRgXSA9IGlkO1xuICAgICAgICBvYnMucHVzaCh0aGlzLmRhdGFfc2VydmljZS51cGRhdGUocGFyYW1zKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9ya0pvaW4ob2JzKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=