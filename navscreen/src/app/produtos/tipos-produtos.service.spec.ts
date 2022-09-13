import { TestBed } from '@angular/core/testing';

import { TiposProdutosService } from './tipos-produtos.service';

describe('TiposProdutosService', () => {
  let service: TiposProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
