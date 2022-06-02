export class PrestamoRespuesta {
    fechaCredito?: string;
    fechaVencimiento?: string;
    monto?: number;
    saldo?: number;
    cantidadCuotas?: number;
    formaPago?: string;
    fechaCuota?: string;
    valorCuota?: number;

    constructor(fechaCredito: string, fechaVencimiento: string, monto: number, saldo: number, cantidadCuotas: number,
         formaPago: string, fechaCuota: string, valorCuota: number) {
            this.fechaCredito = fechaCredito;
            this.fechaVencimiento = fechaVencimiento;
            this.monto = monto;
            this.saldo = saldo;
            this.cantidadCuotas = cantidadCuotas;
            this.formaPago = formaPago;
            this.fechaCuota = fechaCuota;
            this.valorCuota = valorCuota;
    }
}
