import { TestBed } from '@angular/core/testing';

import { ActiveItemService } from './active-item.service';

describe('ActiveItemService', () => {
  let service: ActiveItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
