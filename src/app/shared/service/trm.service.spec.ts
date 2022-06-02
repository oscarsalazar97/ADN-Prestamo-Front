import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Trm } from './../model/trm';
import { TrmService } from './trm.service';

describe('TrmService', () => {
  let httpMock: HttpTestingController;
  let service: TrmService;
  const apiEndpointConsultarTrm = `${environment.endpoint}/trm`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[TrmService, HttpService]
    });

    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(TrmService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia consultar el trm', () => {
    const dummyTrm = new Trm(3400.32);
    service.consultar().subscribe(trm => {
      expect(trm).toBe(dummyTrm);
    });
    
    const req = httpMock.expectOne(apiEndpointConsultarTrm);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTrm);
  });

});
