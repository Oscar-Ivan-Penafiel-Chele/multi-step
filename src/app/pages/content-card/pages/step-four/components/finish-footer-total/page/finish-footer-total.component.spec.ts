import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishFooterTotalComponent } from './finish-footer-total.component';

describe('FinishFooterTotalComponent', () => {
  let component: FinishFooterTotalComponent;
  let fixture: ComponentFixture<FinishFooterTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishFooterTotalComponent]
    });
    fixture = TestBed.createComponent(FinishFooterTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
