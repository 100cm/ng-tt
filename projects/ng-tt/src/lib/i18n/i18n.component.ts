import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tt-i18n',
  template: '<span>{{ t |  I18n | async}}</span>'
})
export class TtI18nComponent implements OnInit {

  constructor() {
  }

  @Input() t = '';

  ngOnInit(): void {
  }

}
