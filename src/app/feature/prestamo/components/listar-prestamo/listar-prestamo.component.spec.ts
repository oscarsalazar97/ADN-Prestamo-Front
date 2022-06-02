import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ListarPrestamoComponent } from './listar-prestamo.component';
import { Prestamo } from './../../shared/model/prestamo';
import { cold } from 'jasmine-marbles';

describe('ListarPrestamoComponent', () => {
  let component: ListarPrestamoComponent;
  let fixture: ComponentFixture<ListarPrestamoComponent>;
  let store: MockStore;
  const listaPrestamos: Prestamo[] = [new Prestamo('1', '3', 'Cliente 1', 120000, 140000, 'SEMANAL', 'ACTIVO')];
  const initialState = { data: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrestamoComponent ],
      providers: [
        provideMockStore({initialState})
      ]  
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrestamoComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('con elementos en la lista de prestamo', () => {
    let consultarPrestamosExito = '[Prestamo Component] Consultar prestamos';
    store.setState({type: consultarPrestamosExito, data: listaPrestamos});

    const expected = cold('(prestamo|)', { prestamo: listaPrestamos });    

    expect(store.select((state) => state.prestamo)).toBeObservable(expected);
  });
});
