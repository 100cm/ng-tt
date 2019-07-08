import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDataTableComponent } from './common-data-table.component';

describe('CommonDataTableComponent', () => {
  let component: CommonDataTableComponent;
  let fixture: ComponentFixture<CommonDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
