import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonsItemsComponent } from './addons-items.component';

describe('AddonsItemsComponent', () => {
  let component: AddonsItemsComponent;
  let fixture: ComponentFixture<AddonsItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddonsItemsComponent]
    });
    fixture = TestBed.createComponent(AddonsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
