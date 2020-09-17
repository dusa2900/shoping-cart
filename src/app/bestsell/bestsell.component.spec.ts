import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellComponent } from './bestsell.component';

describe('BestsellComponent', () => {
  let component: BestsellComponent;
  let fixture: ComponentFixture<BestsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
