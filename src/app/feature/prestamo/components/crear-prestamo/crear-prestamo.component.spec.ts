import { Respuesta } from './../../shared/model/respuesta';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestamoService } from './../../shared/service/prestamo.service';
import { HttpClientModule } from '@angular/common/http';

import { CrearPrestamoComponent } from './crear-prestamo.component';
import { HttpService } from '@core/services/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { PrestamoRespuesta } from '@prestamo/shared/model/prestamo-respuesta';

describe('CrearPrestamoComponent', () => {
  let component: CrearPrestamoComponent;
  let fixture: ComponentFixture<CrearPrestamoComponent>;
  let prestamoService: PrestamoService;

  const prestamo = new PrestamoRespuesta({ fechaCredito: "2022-06-01", fechaVencimiento: "2022-06-15", monto: 120000, saldo: 144000, cantidadCuotas: 2, formaPago: "SEMANAL", fechaCuota: "2022-06-08", valorCuota: 72000 });
  const respuestaPrestamo = new Respuesta(prestamo);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPrestamoComponent ],
      imports:[
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule
        ],
      providers:[
        PrestamoService, HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPrestamoComponent);
    component = fixture.componentInstance;
    prestamoService = TestBed.inject(PrestamoService);
    spyOn(prestamoService, 'crear').and.returnValue(
      of(respuestaPrestamo)
    );
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear prestamo', () => {
    component.crear();
    expect(spyOn(prestamoService, 'crear').calls.count()).toBe(1);
    

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
