import { InjectionToken } from '@angular/core';
import { ApiConfigInterface } from '../interfaces/api-config.interface';

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfigInterface>('tt-api-config');
