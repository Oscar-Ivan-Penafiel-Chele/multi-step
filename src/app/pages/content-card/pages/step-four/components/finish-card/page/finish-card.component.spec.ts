import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishCardComponent } from './finish-card.component';

describe('FinishCardComponent', () => {
  let component: FinishCardComponent;
  let fixture: ComponentFixture<FinishCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishCardComponent]
    });
    fixture = TestBed.createComponent(FinishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
