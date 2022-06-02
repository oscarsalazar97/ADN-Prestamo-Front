import { Respuesta } from './../model/respuesta';
import { PrestamoRespuesta } from './../model/prestamo-respuesta';
import { CrearPrestamo } from './../model/crear-prestamo';
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
  const apiEndpointPrestamo = `${environment.endpoint}/prestamo`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[PrestamoService, HttpService]
    });

    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PrestamoService);
  });

  afterEach(() => {
    httpMock.verify();
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

  it('deberia crear prestamo', () => {
    const prestamo = new CrearPrestamo("3", 120000, 20, 2, "SEMANAL");
   
    const dummyPrestamo = new PrestamoRespuesta({ fechaCredito: "2022-06-01", fechaVencimiento: "2022-06-15", monto: 120000, saldo: 144000, cantidadCuotas: 2, formaPago: "SEMANAL", fechaCuota: "2022-06-08", valorCuota: 72000 });
    const dummyRespuesta = new Respuesta(dummyPrestamo);
    service.crear(prestamo).subscribe(prestamoResp => {
      expect(prestamoResp).toEqual(dummyRespuesta);

    });
   
    const req = httpMock.expectOne(apiEndpointPrestamo);
    expect(req.request.method).toBe('POST');
    req.flush(dummyRespuesta);

  });
});
