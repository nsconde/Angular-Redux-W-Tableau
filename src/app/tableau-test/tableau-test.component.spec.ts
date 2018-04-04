import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauTestComponent } from './tableau-test.component';

describe('TableauTestComponent', () => {
  let component: TableauTestComponent;
  let fixture: ComponentFixture<TableauTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
