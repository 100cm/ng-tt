/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class DataBaseComponent {
    constructor() {
        this._page = '1';
        this._per = '10';
        this.editing_data = {};
        this.checkIndexes = [];
        this.checkAll = false;
        this.search_params = {};
        this.search_columns = [];
        this.columns = [];
    }
    /**
     * @return {?}
     */
    get page() {
        return +this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this._page = value.toString();
    }
    /**
     * @return {?}
     */
    get per() {
        return +this._per;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set per(value) {
        this._per = value.toString();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    search() {
        this.loadData();
    }
    /**
     * @return {?}
     */
    loadData() {
    }
    /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    setData(key, data) {
        this.datas = data[key] || [];
        this.checkIndexes = this.datas.map((/**
         * @param {?} x
         * @return {?}
         */
        x => false));
        this.checkAll = false;
        this.total_count = data.total_count;
        this.total_pages = data.total_pages;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageChange(page) {
        this.page = page;
        this.loadData();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    pageSizeChange(size) {
        this.per = size;
        this.loadData();
    }
    /**
     * @return {?}
     */
    get send_param() {
        return Object.assign({}, this.search_params, { page: this._page, per: this._per });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    edit(data) {
        this.editing_data = data;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS1iYXNlL2RhdGFiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUVFLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsU0FBSSxHQUFXLElBQUksQ0FBQztRQUdwQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBa0JqQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVuQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQTRCLEVBQUUsQ0FBQztJQXVDeEMsQ0FBQzs7OztJQTFEQyxJQUFJLElBQUk7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBSSxHQUFHLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBT0QsUUFBUTtJQUVSLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFlO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1oseUJBQVcsSUFBSSxDQUFDLGFBQWEsSUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBRTtJQUNuRSxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxJQUFlO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Q0FFRjs7O0lBbkVDLGtDQUFvQjs7SUFDcEIsaUNBQW9COztJQUNwQix3Q0FBb0I7O0lBQ3BCLHdDQUFvQjs7SUFDcEIseUNBQWtCOztJQUNsQixrQ0FBVzs7SUFDWCx5Q0FBa0I7O0lBQ2xCLHFDQUFpQjs7SUFrQmpCLDBDQUFtQjs7SUFFbkIsMkNBQW9COztJQUNwQixvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueU9iamVjdCwgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hbnktb2JqZWN0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb21tb25EYXRhVGFibGVDb2x1bW4gfSBmcm9tICcuLi9kYXRhLXRhYmxlL2NvbW1vbi1kYXRhLXRhYmxlL2NvbW1vbi1kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhQmFzZUNvbXBvbmVudDxUID0gQW55T2JqZWN0PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgX3BhZ2U6IHN0cmluZyA9ICcxJztcbiAgX3Blcjogc3RyaW5nID0gJzEwJztcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcbiAgdG90YWxfcGFnZXM6IG51bWJlcjtcbiAgZWRpdGluZ19kYXRhID0ge307XG4gIGRhdGFzOiBUW107XG4gIGNoZWNrSW5kZXhlcyA9IFtdO1xuICBjaGVja0FsbCA9IGZhbHNlO1xuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICt0aGlzLl9wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0IHBlcigpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5fcGVyO1xuICB9XG5cbiAgc2V0IHBlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHNlYXJjaF9wYXJhbXMgPSB7fTtcblxuICBzZWFyY2hfY29sdW1ucyA9IFtdO1xuICBjb2x1bW5zOiBDb21tb25EYXRhVGFibGVDb2x1bW5bXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cblxuICBzZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgbG9hZERhdGEoKTogdm9pZCB7XG4gIH1cblxuICBzZXREYXRhKGtleTogc3RyaW5nLCBkYXRhOiBBbnlPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFzID0gZGF0YVtrZXldIHx8IFtdO1xuICAgIHRoaXMuY2hlY2tJbmRleGVzID0gdGhpcy5kYXRhcy5tYXAoeCA9PiBmYWxzZSk7XG4gICAgdGhpcy5jaGVja0FsbCA9IGZhbHNlO1xuICAgIHRoaXMudG90YWxfY291bnQgPSBkYXRhLnRvdGFsX2NvdW50O1xuICAgIHRoaXMudG90YWxfcGFnZXMgPSBkYXRhLnRvdGFsX3BhZ2VzO1xuICB9XG5cbiAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIHBhZ2VTaXplQ2hhbmdlKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGVyID0gc2l6ZTtcbiAgICB0aGlzLmxvYWREYXRhKCk7XG4gIH1cblxuICBnZXQgc2VuZF9wYXJhbSgpOiBTZWFyY2hQYXJhbXMge1xuICAgIHJldHVybiB7Li4udGhpcy5zZWFyY2hfcGFyYW1zLCBwYWdlOiB0aGlzLl9wYWdlLCBwZXI6IHRoaXMuX3Blcn07XG4gIH1cblxuICBlZGl0KGRhdGE6IEFueU9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdGluZ19kYXRhID0gZGF0YTtcbiAgfVxuXG59XG4iXX0=