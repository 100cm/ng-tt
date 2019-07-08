import { OnInit } from '@angular/core';
import { AnyObject, SearchParams } from '../interfaces/any-object.interface';
import { CommonDataTableColumn } from '../data-table/common-data-table/common-data-table.component';
export declare class DataBaseComponent<T = AnyObject> implements OnInit {
    _page: string;
    _per: string;
    total_count: number;
    total_pages: number;
    editing_data: {};
    datas: T[];
    page: number;
    per: number;
    search_params: {};
    search_columns: any[];
    columns: CommonDataTableColumn[];
    ngOnInit(): void;
    search(): void;
    loadData(): void;
    setData(key: string, data: AnyObject): void;
    pageChange(page: number): void;
    pageSizeChange(size: number): void;
    readonly send_param: SearchParams;
    edit(data: AnyObject): void;
}
