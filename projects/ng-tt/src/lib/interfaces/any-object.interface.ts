export interface AnyObject {
  // tslint:disable-next-line:no-any
  [x: string]: any;
}

export interface SearchParams {
  [param: string]: string | string[];
}

export interface CreateParams {
  // tslint:disable-next-line:no-any
  [param: string]: any;
}
