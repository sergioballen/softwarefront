/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrearReservaService } from './crearReserva.service';

describe('Service: CrearReserva', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearReservaService]
    });
  });

  it('should ...', inject([CrearReservaService], (service: CrearReservaService) => {
    expect(service).toBeTruthy();
  }));
});
