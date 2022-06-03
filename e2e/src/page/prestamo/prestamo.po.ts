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

    async clickBotonCrearPrestamo() {
        await this.linkCrearPrestamo.click();
    }

    async clickBotonListarPrestamos() {
        await this.linkListarPrestamo.click();
    }

    async contarPrestamos() {        
        return this.listaPrestamos.count();
     }

     async prestamos() {        
        return (await this.listaPrestamos).entries;
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
}
