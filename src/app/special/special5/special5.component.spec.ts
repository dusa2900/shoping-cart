import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Special5Component } from './special5.component';

describe('Special5Component', () => {
  let component: Special5Component;
  let fixture: ComponentFixture<Special5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Special5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Special5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
