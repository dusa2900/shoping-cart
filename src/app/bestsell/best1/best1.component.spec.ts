import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Best1Component } from './best1.component';

describe('Best1Component', () => {
  let component: Best1Component;
  let fixture: ComponentFixture<Best1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Best1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Best1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
