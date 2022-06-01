import { CrearPrestamo } from './../model/crear-prestamo';
import { createAction, props } from '@ngrx/store';
import { Prestamo } from '../model/prestamo';

export const crearPrestamo = '[Prestamo Component] Crear prestamo';
export const crearPrestamoExito = '[Prestamo Component] Crear prestamo exitoso';
export const consultarPrestamos = '[Prestamo Component] Consultar prestamos';
export const consultarPrestamosExito = '[Prestamo Component] Consultar prestamos success';

export const consultar = createAction(consultarPrestamos);
export const consultaExitosa = createAction(
    consultarPrestamosExito, props<{ data: Prestamo[] }>()
  );
export const crear = createAction(
  crearPrestamo, props<{ prestamo: CrearPrestamo }>()
  );
  export const crearExitoso = createAction(
    crearPrestamoExito, props<{ data: any}>()
    );  