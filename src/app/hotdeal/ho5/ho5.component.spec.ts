import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ho5Component } from './ho5.component';

describe('Ho5Component', () => {
  let component: Ho5Component;
  let fixture: ComponentFixture<Ho5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ho5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ho5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
