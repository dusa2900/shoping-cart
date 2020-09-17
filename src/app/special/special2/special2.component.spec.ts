import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Special2Component } from './special2.component';

describe('Special2Component', () => {
  let component: Special2Component;
  let fixture: ComponentFixture<Special2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Special2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Special2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
