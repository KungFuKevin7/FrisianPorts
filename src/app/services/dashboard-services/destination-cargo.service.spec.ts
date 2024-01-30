import { TestBed } from '@angular/core/testing';

import { DestinationCargoService } from './destination-cargo.service';

describe('DestinationCargoServiceService', () => {
  let service: DestinationCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
