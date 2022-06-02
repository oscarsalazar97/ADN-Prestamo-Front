export class Prestamo {
    id?: string;
    idCliente?: string;
    nombreCliente?: string;
    monto?: number;
    saldo?: number;
    formaPago?: string;
    estadoCredito?: string;

    constructor(id: string, idCliente: string, nombreCliente: string, monto: number, saldo: number, formaPago: string, estadoCredito: string) {
        this.id = id;
        this.idCliente = idCliente;
        this.nombreCliente = nombreCliente;
        this.monto = monto;
        this.saldo = saldo;
        this.formaPago = formaPago;
        this.estadoCredito = estadoCredito;
    }
}