/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @template T
 */
var /**
 * @template T
 */
DataBaseComponent = /** @class */ (function () {
    function DataBaseComponent() {
        this._page = '1';
        this._per = '10';
        this.editing_data = {};
        this.search_params = {};
        this.search_columns = [];
        this.columns = [];
    }
    Object.defineProperty(DataBaseComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return +this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._page = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBaseComponent.prototype, "per", {
        get: /**
         * @return {?}
         */
        function () {
            return +this._per;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._per = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DataBaseComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.loadData();
    };
    /**
     * @return {?}
     */
    DataBaseComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    DataBaseComponent.prototype.setData = /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    function (key, data) {
        this.datas = data[key] || [];
        this.total_count = data.total_count;
        this.total_pages = data.total_pages;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    DataBaseComponent.prototype.pageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.page = page;
        this.loadData();
    };
    /**
     * @param {?} size
     * @return {?}
     */
    DataBaseComponent.prototype.pageSizeChange = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.per = size;
        this.loadData();
    };
    Object.defineProperty(DataBaseComponent.prototype, "send_param", {
        get: /**
         * @return {?}
         */
        function () {
            return tslib_1.__assign({}, this.search_params, { page: this._page, per: this._per });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    DataBaseComponent.prototype.edit = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.editing_data = data;
    };
    return DataBaseComponent;
}());
/**
 * @template T
 */
export { DataBaseComponent };
if (false) {
    /** @type {?} */
    DataBaseComponent.prototype._page;
    /** @type {?} */
    DataBaseComponent.prototype._per;
    /** @type {?} */
    DataBaseComponent.prototype.total_count;
    /** @type {?} */
    DataBaseComponent.prototype.total_pages;
    /** @type {?} */
    DataBaseComponent.prototype.editing_data;
    /** @type {?} */
    DataBaseComponent.prototype.datas;
    /** @type {?} */
    DataBaseComponent.prototype.search_params;
    /** @type {?} */
    DataBaseComponent.prototype.search_columns;
    /** @type {?} */
    DataBaseComponent.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS1iYXNlL2RhdGFiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBOzs7O0lBQUE7UUFFRSxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFNBQUksR0FBVyxJQUFJLENBQUM7UUFHcEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFtQmxCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBNEIsRUFBRSxDQUFDO0lBcUN4QyxDQUFDO0lBeERDLHNCQUFJLG1DQUFJOzs7O1FBQVI7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFHOzs7O1FBQVA7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQixDQUFDOzs7OztRQUVELFVBQVEsS0FBYTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTs7OztJQVdELG9DQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELG1DQUFPOzs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLElBQWU7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsSUFBWTtRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFJLHlDQUFVOzs7O1FBQWQ7WUFDRSw0QkFBVyxJQUFJLENBQUMsYUFBYSxJQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFFO1FBQ25FLENBQUM7OztPQUFBOzs7OztJQUVELGdDQUFJOzs7O0lBQUosVUFBSyxJQUFlO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7Ozs7Ozs7SUEvREMsa0NBQW9COztJQUNwQixpQ0FBb0I7O0lBQ3BCLHdDQUFvQjs7SUFDcEIsd0NBQW9COztJQUNwQix5Q0FBa0I7O0lBQ2xCLGtDQUFXOztJQWtCWCwwQ0FBbUI7O0lBRW5CLDJDQUFvQjs7SUFDcEIsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlPYmplY3QsIFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvYW55LW9iamVjdC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29tbW9uRGF0YVRhYmxlQ29sdW1uIH0gZnJvbSAnLi4vZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS9jb21tb24tZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgRGF0YUJhc2VDb21wb25lbnQ8VCA9IEFueU9iamVjdD4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIF9wYWdlOiBzdHJpbmcgPSAnMSc7XG4gIF9wZXI6IHN0cmluZyA9ICcxMCc7XG4gIHRvdGFsX2NvdW50OiBudW1iZXI7XG4gIHRvdGFsX3BhZ2VzOiBudW1iZXI7XG4gIGVkaXRpbmdfZGF0YSA9IHt9O1xuICBkYXRhczogVFtdO1xuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICt0aGlzLl9wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0IHBlcigpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5fcGVyO1xuICB9XG5cbiAgc2V0IHBlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHNlYXJjaF9wYXJhbXMgPSB7fTtcblxuICBzZWFyY2hfY29sdW1ucyA9IFtdO1xuICBjb2x1bW5zOiBDb21tb25EYXRhVGFibGVDb2x1bW5bXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cblxuICBzZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgbG9hZERhdGEoKTogdm9pZCB7XG4gIH1cblxuICBzZXREYXRhKGtleTogc3RyaW5nLCBkYXRhOiBBbnlPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFzID0gZGF0YVtrZXldIHx8IFtdO1xuICAgIHRoaXMudG90YWxfY291bnQgPSBkYXRhLnRvdGFsX2NvdW50O1xuICAgIHRoaXMudG90YWxfcGFnZXMgPSBkYXRhLnRvdGFsX3BhZ2VzO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIHBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGVyID0gc2l6ZTtcbiAgICB0aGlzLmxvYWREYXRhKCk7XG4gIH1cblxuICBnZXQgc2VuZF9wYXJhbSgpOiBTZWFyY2hQYXJhbXMge1xuICAgIHJldHVybiB7Li4udGhpcy5zZWFyY2hfcGFyYW1zLCBwYWdlOiB0aGlzLl9wYWdlLCBwZXI6IHRoaXMuX3Blcn07XG4gIH1cblxuICBlZGl0KGRhdGE6IEFueU9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdGluZ19kYXRhID0gZGF0YTtcbiAgfVxuXG59XG4iXX0=