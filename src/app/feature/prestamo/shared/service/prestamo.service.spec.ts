import { HttpService } from 'src/app/core/services/http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { PrestamoService } from './prestamo.service';
import { Prestamo } from '../model/prestamo';

describe('PrestamoService', () => {
  let httpMock: HttpTestingController;
  let service: PrestamoService;
  const apiEndpointPrestamosLista = `${environment.endpoint}/prestamos`;
  //const apiEndpointPrestamo = `${environment.endpoint}/prestamo`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[PrestamoService, HttpService]
    });

    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PrestamoService);
  });

  it('should be created', () => {
    const prestamoService: PrestamoService = TestBed.inject(PrestamoService);
    expect(prestamoService).toBeTruthy();
  });

  it('deberia listar prestamos', () => {
    const dummyPrestamos = [
      new Prestamo('1', '3', 'Cliente 1', 120000, 140000, 'SEMANAL', 'ACTIVO'),
      new Prestamo('2', '3', 'Cliente 1', 130000, 150000, 'SEMANAL', 'ACTIVO')
    ];

    service.consultar().subscribe(prestamos => {
      expect(prestamos.length).toBe(2);
      expect(prestamos).toEqual(dummyPrestamos);
    });
    const req = httpMock.expectOne(apiEndpointPrestamosLista);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPrestamos);

  });
});
