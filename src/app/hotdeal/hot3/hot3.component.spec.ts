import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hot3Component } from './hot3.component';

describe('Hot3Component', () => {
  let component: Hot3Component;
  let fixture: ComponentFixture<Hot3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hot3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
