import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineExampleComponent } from './line-example.component';

describe('LineExampleComponent', () => {
  let component: LineExampleComponent;
  let fixture: ComponentFixture<LineExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
