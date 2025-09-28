import { TestBed } from '@angular/core/testing';

import { DataProcess } from './data-process';

describe('DataProcess', () => {
  let service: DataProcess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProcess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
