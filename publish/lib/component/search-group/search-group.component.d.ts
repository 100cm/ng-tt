import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
export interface SearchColumn {
    name: string;
    key: string;
    type: 'input' | 'select' | 'date' | 'range';
    data_source?: Array<{
        name: string;
        value: string | number;
    }> | Observable<Array<{
        name: string;
        value: string | number;
    }>>;
    async?: boolean;
    multiple: boolean;
    changeAction?(): void;
}
export declare class SearchGroupComponent implements OnInit, ControlValueAccessor {
    search_columns: SearchColumn[];
    extra_form: TemplateRef<void>;
    search_params: {
        [x: string]: string;
    };
    readonly onSearch: EventEmitter<{}>;
    buttons: TemplateRef<{
        $implicit: any;
    }>;
    extra_search: TemplateRef<{
        $implicit: any;
    }>;
    readonly update: EventEmitter<any>;
    readonly delete: EventEmitter<void>;
    created_at_before: string;
    created_at_after: string;
    updated_at_before: string;
    updated_at_after: string;
    show_more: boolean;
    range_keys: {};
    edit_params: {};
    constructor();
    visible: boolean;
    edit_columns: SearchColumn[];
    onChange: (value: {
        [x: string]: string;
    }) => void;
    onTouched: () => void;
    registerOnChange(fn: (_: {
        [x: string]: string;
    }) => {}): void;
    registerOnTouched(fn: () => {}): void;
    writeValue(obj: {
        [x: string]: string;
    }): void;
    ngOnInit(): void;
    search(): void;
    close(): void;
    reset(): void;
    edit(): void;
    changeCreate($event: string, after: string): void;
    changeUpdate($event: string, after: string): void;
    setRange(value: string, key: string, after: string): void;
    batchUpdate(): void;
    batchDelete(): void;
}
