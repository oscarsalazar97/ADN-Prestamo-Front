import { by, element } from 'protractor';

export class PrestamoPage {
    private linkListarPrestamo = element(by.id('linkListarPrestamo'));
    private linkCrearPrestamo = element(by.id('linkCrearPrestamo'));
    private inputIdCliente = element(by.id('idCliente'));
    private inputMonto = element(by.id('monto'));
    private selectFormaPago = element(by.id('formaPago'));
    private selectCantidadCuotas = element(by.id('cantidadCuotas'));
    private inputPorcentajeInteres = element(by.id('porcentajeInteres'));
    private listaPrestamos = element.all(by.css('.prestamos'));
    private formularioCrearPrestamo = element(by.id('formCrearPrestamo'));
    private botonAbonar = element(by.id('abonar'));

    async clickBotonCrearPrestamo() {
        await this.linkCrearPrestamo.click();
    }

    async clickBotonListarPrestamos() {
        await this.linkListarPrestamo.click();
    }

    async contarPrestamos() {        
        return this.listaPrestamos.count();
     }

    async ingresarIdCliente(idCliente) {
        await this.inputIdCliente.sendKeys(idCliente);
    }

    async ingresarMonto(monto) {
        await this.inputMonto.sendKeys(monto);
    }

    async ingresarFormaPago(formaPago) {
        await this.selectFormaPago.sendKeys(formaPago);
    }

    async ingresarCantidadCuotas(cantidadCuotas) {
        await this.selectCantidadCuotas.sendKeys(cantidadCuotas);
    }

    async ingresarPorcentajeInteres(porcentajeInteres) {
        await this.inputPorcentajeInteres.sendKeys(porcentajeInteres);
    }

    async formCrearPrestamo() {
        await this.formularioCrearPrestamo.submit();
    }

    async clickBotonAbonarPrestamo() {
        await this.botonAbonar.click();
    }
}
