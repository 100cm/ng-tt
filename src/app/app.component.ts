import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public user_service: UserService) {
  }

  title = 'ng-tt-cli';

  search_columns = [
    {
      name: 'User.name',
      key: 'name',
      type: 'input'
    }
  ];

  columns = [
    {
      name: 'ID',
      key: 'id'
    },
    {
      name: '名称',
      key: 'name'
    },
  ];

  edit_columns = [
    {
      name: 'User.name',
      key: 'name',
      type: 'input'
    },
    {
      name: 'User.created_at',
      key: 'created_at',
      type: 'date'
    }
  ];

}
