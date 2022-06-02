export class CrearPrestamo {
    idCliente?: string;
    monto?: number;
    porcentajeInteres?: number;
    cantidadCuotas?: number;
    formaPago?: string;

    constructor(idCliente: string, monto: number, porcentajeInteres: number, cantidadCuotas: number, formaPago: string) {
        this.idCliente = idCliente;
        this.monto = monto;
        this.porcentajeInteres = porcentajeInteres;
        this.cantidadCuotas = cantidadCuotas;
        this.formaPago = formaPago;
    }
}
