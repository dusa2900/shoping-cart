import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Special3Component } from './special3.component';

describe('Special3Component', () => {
  let component: Special3Component;
  let fixture: ComponentFixture<Special3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Special3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Special3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
