import { TestBed } from '@angular/core/testing';

import { TelefonesService } from './telefones.service';

describe('TelefonesService', () => {
  let service: TelefonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
