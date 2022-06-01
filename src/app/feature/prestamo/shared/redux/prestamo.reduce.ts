import { createReducer, on } from "@ngrx/store";
import { consultaExitosa, consultar, crear, crearExitoso } from "./prestamo.action";

export const prestamoReducer = createReducer(
    on(consultar, state => state),
    on(consultaExitosa, (state: any, actions: any) => {
        state = actions.payload.data;
        return state;
    }),
    on(crear, state => state),
    on(crearExitoso, (state: any, actions: any) => {
        state = actions.data;
        return state;
    }),
);