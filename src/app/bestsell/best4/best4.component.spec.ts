import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Best4Component } from './best4.component';

describe('Best4Component', () => {
  let component: Best4Component;
  let fixture: ComponentFixture<Best4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Best4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Best4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
