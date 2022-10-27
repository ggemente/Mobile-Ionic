import { TestBed } from '@angular/core/testing';

import { PessoaServService } from './pessoa-serv.service';

describe('PessoaServService', () => {
  let service: PessoaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
