import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Special6Component } from './special6.component';

describe('Special6Component', () => {
  let component: Special6Component;
  let fixture: ComponentFixture<Special6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Special6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Special6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
