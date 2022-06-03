import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPrestamoComponent } from './listar-prestamo.component';
import { Prestamo } from './../../shared/model/prestamo';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { PrestamoService } from './../../shared/service/prestamo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrestamoRespuesta } from '@prestamo/shared/model/prestamo-respuesta';
import { Abono } from '@prestamo/shared/model/abono';
import { Respuesta } from '@prestamo/shared/model/respuesta';

describe('ListarPrestamoComponent', () => {
  let component: ListarPrestamoComponent;
  let fixture: ComponentFixture<ListarPrestamoComponent>;
  let prestamoService: PrestamoService;
  const listaPrestamos: Prestamo[] = [new Prestamo('1', '3', 'Cliente 1', 120000, 140000, 'SEMANAL', 'ACTIVO')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrestamoComponent ],
      imports:[
        CommonModule,
        HttpClientModule
      ],
      providers: [
        PrestamoService, HttpService
      ]  
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrestamoComponent);
    component = fixture.componentInstance;
    prestamoService = TestBed.inject(PrestamoService);
    spyOn(prestamoService, 'consultar').and.returnValue(
      of(listaPrestamos)
    );
    fixture.detectChanges();
  });

  it('should be created', () =>{
    expect(component).toBeTruthy();
  });

  it('deberia crear lista con 1 prestamo', () => {
    component.prestamos.subscribe(resultado => {
      expect(1).toBe(resultado.length);      
      expect(listaPrestamos).toBe(resultado);
  });
  });

  it('deberia crear Abono', () => {
    const dummyPrestamo = new PrestamoRespuesta("2022-06-01", "2022-06-15", 120000.0, 144000.0, 2,"SEMANAL",  "2022-06-08");
    const dummyAbonoResponse = new Abono(1, null, dummyPrestamo, "2022-06-02", 72000.0, 0.0);
    const dummyRespuesta = new Respuesta(dummyAbonoResponse);
    spyOn(prestamoService, 'abonar').and.returnValue(
      of(dummyRespuesta)
    );

    component.abonar(3);
    expect(component.abono).toBe(dummyRespuesta.valor);

  });

});
