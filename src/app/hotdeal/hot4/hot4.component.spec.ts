import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hot4Component } from './hot4.component';

describe('Hot4Component', () => {
  let component: Hot4Component;
  let fixture: ComponentFixture<Hot4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hot4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hot4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
