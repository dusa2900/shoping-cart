import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hot1Component } from './hot1.component';

describe('Hot1Component', () => {
  let component: Hot1Component;
  let fixture: ComponentFixture<Hot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
