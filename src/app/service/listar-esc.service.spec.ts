import { TestBed } from '@angular/core/testing';

import { ListarEscService } from './listar-esc.service';

describe('ListarEscService', () => {
  let service: ListarEscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarEscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
