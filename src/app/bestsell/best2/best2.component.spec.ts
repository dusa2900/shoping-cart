import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Best2Component } from './best2.component';

describe('Best2Component', () => {
  let component: Best2Component;
  let fixture: ComponentFixture<Best2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Best2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Best2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
