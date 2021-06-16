import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { FactoriesService } from './factories.service';

describe('FactoriesService', () => {
  let service: FactoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FactoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
