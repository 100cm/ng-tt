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
    DataBaseComponent.prototype.search_params;
    /** @type {?} */
    DataBaseComponent.prototype.search_columns;
    /** @type {?} */
    DataBaseComponent.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdHQvIiwic291cmNlcyI6WyJsaWIvZGF0YS1iYXNlL2RhdGFiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsTUFBTSxPQUFPLGlCQUFpQjtJQUE5QjtRQUVFLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsU0FBSSxHQUFXLElBQUksQ0FBQztRQUdwQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQW1CbEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFbkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUE0QixFQUFFLENBQUM7SUFxQ3hDLENBQUM7Ozs7SUF4REMsSUFBSSxJQUFJO1FBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztJQU9ELFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsSUFBZTtRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1oseUJBQVcsSUFBSSxDQUFDLGFBQWEsSUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBRTtJQUNuRSxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxJQUFlO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Q0FFRjs7O0lBL0RDLGtDQUFvQjs7SUFDcEIsaUNBQW9COztJQUNwQix3Q0FBb0I7O0lBQ3BCLHdDQUFvQjs7SUFDcEIseUNBQWtCOztJQUNsQixrQ0FBVzs7SUFrQlgsMENBQW1COztJQUVuQiwyQ0FBb0I7O0lBQ3BCLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW55T2JqZWN0LCBTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2FueS1vYmplY3QuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbW1vbkRhdGFUYWJsZUNvbHVtbiB9IGZyb20gJy4uL2RhdGEtdGFibGUvY29tbW9uLWRhdGEtdGFibGUvY29tbW9uLWRhdGEtdGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIERhdGFCYXNlQ29tcG9uZW50PFQgPSBBbnlPYmplY3Q+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBfcGFnZTogc3RyaW5nID0gJzEnO1xuICBfcGVyOiBzdHJpbmcgPSAnMTAnO1xuICB0b3RhbF9jb3VudDogbnVtYmVyO1xuICB0b3RhbF9wYWdlczogbnVtYmVyO1xuICBlZGl0aW5nX2RhdGEgPSB7fTtcbiAgZGF0YXM6IFRbXTtcblxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5fcGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGdldCBwZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gK3RoaXMuX3BlcjtcbiAgfVxuXG4gIHNldCBwZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BlciA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cblxuICBzZWFyY2hfcGFyYW1zID0ge307XG5cbiAgc2VhcmNoX2NvbHVtbnMgPSBbXTtcbiAgY29sdW1uczogQ29tbW9uRGF0YVRhYmxlQ29sdW1uW10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIGxvYWREYXRhKCk6IHZvaWQge1xuICB9XG5cbiAgc2V0RGF0YShrZXk6IHN0cmluZywgZGF0YTogQW55T2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5kYXRhcyA9IGRhdGFba2V5XSB8fCBbXTtcbiAgICB0aGlzLnRvdGFsX2NvdW50ID0gZGF0YS50b3RhbF9jb3VudDtcbiAgICB0aGlzLnRvdGFsX3BhZ2VzID0gZGF0YS50b3RhbF9wYWdlcztcbiAgfVxuXG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLmxvYWREYXRhKCk7XG4gIH1cblxuICBwYWdlU2l6ZUNoYW5nZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBlciA9IHNpemU7XG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgZ2V0IHNlbmRfcGFyYW0oKTogU2VhcmNoUGFyYW1zIHtcbiAgICByZXR1cm4gey4uLnRoaXMuc2VhcmNoX3BhcmFtcywgcGFnZTogdGhpcy5fcGFnZSwgcGVyOiB0aGlzLl9wZXJ9O1xuICB9XG5cbiAgZWRpdChkYXRhOiBBbnlPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRpbmdfZGF0YSA9IGRhdGE7XG4gIH1cblxufVxuIl19