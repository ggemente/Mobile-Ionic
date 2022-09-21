import { TestBed } from '@angular/core/testing';

import { TipoServService } from './tipo-serv.service';

describe('TipoServService', () => {
  let service: TipoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
