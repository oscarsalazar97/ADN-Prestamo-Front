import { PrestamoService } from './../service/prestamo.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { consultarPrestamos, consultarPrestamosExito, crear, crearExitoso } from './prestamo.action';

@Injectable()
export class PrestamoEffects {
  constructor(
    private actions: Actions,
    private prestamoService: PrestamoService
  ) {}

  getPrestamos$ = createEffect(() =>
    this.actions.pipe(
      ofType(consultarPrestamos),
      mergeMap(() => {
        return this.prestamoService.consultar().pipe(
          map((prestamos) => {
            return {
              type: consultarPrestamosExito,
              payload: { data: prestamos},
            };
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  crearPrestamo$ = createEffect(() =>
      this.actions.pipe(
        ofType(crear),
        exhaustMap((action) => {
          console.log("ACTION EFFECT");
          
         console.log(action.prestamo);
          console.log("ACTION EFFECT CIERRA");
          
          return this.prestamoService.crear(action.prestamo).pipe(
            map((response) => {
              console.log("RESPONSE crear prestamo");
              
              return crearExitoso({data: response});
            }

            ), catchError(() => EMPTY)
          );

        }

        )
      )
  );
  
}