import { TestBed, inject } from '@angular/core/testing';

import { QrRouteService } from './route-guard';

describe('QrRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrRouteService]
    });
  });

  it('should be created', inject([QrRouteService], (service: QrRouteService) => {
    expect(service).toBeTruthy();
  }));
});
