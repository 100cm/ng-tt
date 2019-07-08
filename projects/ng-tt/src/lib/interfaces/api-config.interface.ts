import { AnyObject } from './any-object.interface';

export interface ApiConfigInterface {
  apiUid: string;
  apiSecret: string;
  tokenUrl?: string;
  tokenKey?: string;
  tokenExpiredIn?: string;
  tokenParams?: AnyObject[];
}
