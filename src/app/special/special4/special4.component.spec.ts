import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Special4Component } from './special4.component';

describe('Special4Component', () => {
  let component: Special4Component;
  let fixture: ComponentFixture<Special4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Special4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Special4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
