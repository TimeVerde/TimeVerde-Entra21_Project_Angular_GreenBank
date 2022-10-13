import { TestBed } from '@angular/core/testing';

import { PessoaLogadaService } from './pessoa-logada.service';

describe('PessoaLogadaService', () => {
  let service: PessoaLogadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaLogadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
