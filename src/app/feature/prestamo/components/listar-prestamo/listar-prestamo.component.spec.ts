import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPrestamoComponent } from './listar-prestamo.component';
import { Prestamo } from './../../shared/model/prestamo';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { PrestamoService } from './../../shared/service/prestamo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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


  it('deberia crear lista con 1 prestamo', () => {
    expect(component).toBeTruthy();
    component.prestamos.subscribe(resultado => {
      expect(1).toBe(resultado.length);
      expect(spyOn(prestamoService, 'consultar').calls.count()).toBe(1);
      
  });
  });
});
