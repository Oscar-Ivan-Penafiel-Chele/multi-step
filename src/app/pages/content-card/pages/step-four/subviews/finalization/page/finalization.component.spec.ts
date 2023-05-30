import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizationComponent } from './finalization.component';

describe('FinalizationComponent', () => {
  let component: FinalizationComponent;
  let fixture: ComponentFixture<FinalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizationComponent]
    });
    fixture = TestBed.createComponent(FinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
