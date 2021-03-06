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
import { Respuesta } from './../../shared/model/respuesta';
import { CrearPrestamo } from '@prestamo/shared/model/crear-prestamo';


describe('CrearPrestamoComponent', () => {
  let component: CrearPrestamoComponent;
  let fixture: ComponentFixture<CrearPrestamoComponent>;
  let prestamoService: PrestamoService;

  const prestamoCrear = new CrearPrestamo("3", 120000, 20, 2, "SEMANAL");
  const prestamo = new PrestamoRespuesta("2022-06-01", "2022-06-15", 120000.0, 144000.0, 2,"SEMANAL",  "2022-06-08");
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

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.prestamoForm.valid).toBeFalsy();
  });

  it('deberia crear prestamo', () => {
    prestamoService.crear(prestamoCrear).subscribe((resp: Respuesta<PrestamoRespuesta>)=> {
      expect(resp.valor).toBe(prestamo);
    });
  });
});
