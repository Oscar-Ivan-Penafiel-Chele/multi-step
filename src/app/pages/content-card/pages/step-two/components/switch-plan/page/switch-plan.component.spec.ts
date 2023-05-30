import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPlanComponent } from './switch-plan.component';

describe('SwitchPlanComponent', () => {
  let component: SwitchPlanComponent;
  let fixture: ComponentFixture<SwitchPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchPlanComponent]
    });
    fixture = TestBed.createComponent(SwitchPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
