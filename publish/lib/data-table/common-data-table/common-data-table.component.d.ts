import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { DataBaseComponent } from '../../data-base/database.component';
import { AnyObject, SearchParams } from '../../interfaces/any-object.interface';
export interface CommonDataTableColumn {
    name: string;
    key: string;
    resource?: string;
    resource_key?: string;
    array?: boolean;
    array_key?: string;
    dictionary?: {
        [x: string]: string;
    };
}
export declare class CommonDataTableComponent extends DataBaseComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    data_service: any;
    columns: CommonDataTableColumn[];
    Model: string;
    resource: string;
    search_columns: any[];
    edit_columns: any[];
    handle_columns: TemplateRef<{
        $implicit: any;
    }>;
    extra_search: TemplateRef<{
        $implicit: any;
    }>;
    prefixRoute: string;
    search_params: SearchParams;
    readonly onSearch: EventEmitter<void>;
    readonly search_paramsChange: EventEmitter<SearchParams>;
    loadData(): void;
    search(): void;
    changeSearchParams(): void;
    readonly model: string;
    changeCheckIndex(check: boolean): void;
    checkList(value: boolean): void;
    deleteAll(): void;
    batchUpdate(update_params: AnyObject): void;
}
