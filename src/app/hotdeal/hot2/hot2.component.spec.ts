import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hot2Component } from './hot2.component';

describe('Hot2Component', () => {
  let component: Hot2Component;
  let fixture: ComponentFixture<Hot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
