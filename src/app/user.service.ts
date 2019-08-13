import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  users() {
    return of({users: [{name: 1, id: 1}, {name: 1, id: 2}, {name: 1, id: 3}]});
  }

  update(params){
    return of({users: [{name: 1, id: 1}, {name: 1, id: 2}, {name: 1, id: 3}]});
  }
}
