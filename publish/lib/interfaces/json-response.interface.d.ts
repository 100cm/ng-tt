export interface JsonResponseInterface {
    status?: {
        code: string;
        message: string;
    };
}
export declare type JsonResponse<T> = JsonResponseInterface & AtyunResponse<T> & T & {
    total_pages?: number;
    total_count?: number;
};
export interface AtyunResponse<T> {
    [x: string]: T & string;
}
export interface TokenResponse<T> extends JsonResponseInterface {
    access_token: string & T;
    message: string & T;
    expires_in: string & T;
    created_at: string & T;
}
