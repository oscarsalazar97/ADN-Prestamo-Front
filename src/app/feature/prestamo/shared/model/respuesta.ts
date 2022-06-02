import { PrestamoRespuesta } from './prestamo-respuesta';

export class Respuesta {
    valor: PrestamoRespuesta;

    constructor(prestamo: PrestamoRespuesta) {
       this.valor = prestamo;
    }
}
