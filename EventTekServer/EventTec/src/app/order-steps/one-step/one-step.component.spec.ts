import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStepComponent } from './one-step.component';

describe('OneStepComponent', () => {
  let component: OneStepComponent;
  let fixture: ComponentFixture<OneStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
