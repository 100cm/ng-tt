import { OnInit } from '@angular/core';
import { AnyObject, SearchParams } from '../interfaces/any-object.interface';
import { CommonDataTableColumn } from '../data-table/common-data-table/common-data-table.component';

export class DataBaseComponent<T = AnyObject> implements OnInit {

  _page: string = '1';
  _per: string = '10';
  total_count: number;
  total_pages: number;
  editing_data = {};
  datas: T[];

  get page(): number {
    return +this._page;
  }

  set page(value: number) {
    this._page = value.toString();
  }

  get per(): number {
    return +this._per;
  }

  set per(value: number) {
    this._per = value.toString();
  }

  search_params = {};

  search_columns = [];
  columns: CommonDataTableColumn[] = [];

  ngOnInit(): void {

  }

  search(): void {
    this.loadData();
  }

  loadData(): void {
  }

  setData(key: string, data: AnyObject): void {
    this.datas = data[key] || [];
    this.total_count = data.total_count;
    this.total_pages = data.total_pages;
  }

  pageChange(page: number): void {
    this.page = page;
    this.loadData();
  }

  pageSizeChange(size: number): void {
    this.per = size;
    this.loadData();
  }

  get send_param(): SearchParams {
    return {...this.search_params, page: this._page, per: this._per};
  }

  edit(data: AnyObject): void {
    this.editing_data = data;
  }

}
