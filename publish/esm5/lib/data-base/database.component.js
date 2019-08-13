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
        this.checkIndexes = [];
        this.checkAll = false;
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
        this.checkIndexes = this.datas.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return false; }));
        this.checkAll = false;
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
    DataBaseComponent.prototype.checkIndexes;
    /** @type {?} */
    DataBaseComponent.prototype.checkAll;
    /** @type {?} */
    DataBaseComponent.prototype.search_params;
    /** @type {?} */
    DataBaseComponent.prototype.search_columns;
    /** @type {?} */
    DataBaseComponent.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS1iYXNlL2RhdGFiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBOzs7O0lBQUE7UUFFRSxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFNBQUksR0FBVyxJQUFJLENBQUM7UUFHcEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWtCakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFbkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUE0QixFQUFFLENBQUM7SUF1Q3hDLENBQUM7SUExREMsc0JBQUksbUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBRUQsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQUc7Ozs7UUFBUDtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBRUQsVUFBUSxLQUFhO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQUpBOzs7O0lBV0Qsb0NBQVE7OztJQUFSO0lBRUEsQ0FBQzs7OztJQUVELGtDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7O0lBRUQsbUNBQU87Ozs7O0lBQVAsVUFBUSxHQUFXLEVBQUUsSUFBZTtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsc0NBQVU7Ozs7SUFBVixVQUFXLElBQVk7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLElBQVk7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQkFBSSx5Q0FBVTs7OztRQUFkO1lBQ0UsNEJBQVcsSUFBSSxDQUFDLGFBQWEsSUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBRTtRQUNuRSxDQUFDOzs7T0FBQTs7Ozs7SUFFRCxnQ0FBSTs7OztJQUFKLFVBQUssSUFBZTtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDOzs7Ozs7O0lBbkVDLGtDQUFvQjs7SUFDcEIsaUNBQW9COztJQUNwQix3Q0FBb0I7O0lBQ3BCLHdDQUFvQjs7SUFDcEIseUNBQWtCOztJQUNsQixrQ0FBVzs7SUFDWCx5Q0FBa0I7O0lBQ2xCLHFDQUFpQjs7SUFrQmpCLDBDQUFtQjs7SUFFbkIsMkNBQW9COztJQUNwQixvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueU9iamVjdCwgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hbnktb2JqZWN0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb21tb25EYXRhVGFibGVDb2x1bW4gfSBmcm9tICcuLi9kYXRhLXRhYmxlL2NvbW1vbi1kYXRhLXRhYmxlL2NvbW1vbi1kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhQmFzZUNvbXBvbmVudDxUID0gQW55T2JqZWN0PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX3BhZ2U6IHN0cmluZyA9ICcxJztcbiAgX3Blcjogc3RyaW5nID0gJzEwJztcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcbiAgdG90YWxfcGFnZXM6IG51bWJlcjtcbiAgZWRpdGluZ19kYXRhID0ge307XG4gIGRhdGFzOiBUW107XG4gIGNoZWNrSW5kZXhlcyA9IFtdO1xuICBjaGVja0FsbCA9IGZhbHNlO1xuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICt0aGlzLl9wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0IHBlcigpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5fcGVyO1xuICB9XG5cbiAgc2V0IHBlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHNlYXJjaF9wYXJhbXMgPSB7fTtcblxuICBzZWFyY2hfY29sdW1ucyA9IFtdO1xuICBjb2x1bW5zOiBDb21tb25EYXRhVGFibGVDb2x1bW5bXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cblxuICBzZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgbG9hZERhdGEoKTogdm9pZCB7XG4gIH1cblxuICBzZXREYXRhKGtleTogc3RyaW5nLCBkYXRhOiBBbnlPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFzID0gZGF0YVtrZXldIHx8IFtdO1xuICAgIHRoaXMuY2hlY2tJbmRleGVzID0gdGhpcy5kYXRhcy5tYXAoeCA9PiBmYWxzZSk7XG4gICAgdGhpcy5jaGVja0FsbCA9IGZhbHNlO1xuICAgIHRoaXMudG90YWxfY291bnQgPSBkYXRhLnRvdGFsX2NvdW50O1xuICAgIHRoaXMudG90YWxfcGFnZXMgPSBkYXRhLnRvdGFsX3BhZ2VzO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIHBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGVyID0gc2l6ZTtcbiAgICB0aGlzLmxvYWREYXRhKCk7XG4gIH1cblxuICBnZXQgc2VuZF9wYXJhbSgpOiBTZWFyY2hQYXJhbXMge1xuICAgIHJldHVybiB7Li4udGhpcy5zZWFyY2hfcGFyYW1zLCBwYWdlOiB0aGlzLl9wYWdlLCBwZXI6IHRoaXMuX3Blcn07XG4gIH1cblxuICBlZGl0KGRhdGE6IEFueU9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdGluZ19kYXRhID0gZGF0YTtcbiAgfVxuXG59XG4iXX0=