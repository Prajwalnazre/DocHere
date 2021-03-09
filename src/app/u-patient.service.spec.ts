import { TestBed } from '@angular/core/testing';

import { UPatientService } from './u-patient.service';

describe('UPatientService', () => {
  let service: UPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
