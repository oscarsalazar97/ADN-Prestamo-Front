import { PrestamoRespuesta } from '@prestamo/shared/model/prestamo-respuesta';

export class Abono {
    id?: number;
    idPrestamo?: number;
    prestamo?: PrestamoRespuesta;
    fecha?: string;
    valor?: number;
    recargo?: number;

    constructor(id: number, idPrestamo: number, prestamo: PrestamoRespuesta, fecha: string, valor: number, recargo: number) {
        this.id = id;
        this.idPrestamo = idPrestamo;
        this.prestamo = prestamo;
        this.fecha = fecha;
        this.valor = valor;
        this.recargo = recargo;
    }
}
