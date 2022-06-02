import { by, element } from 'protractor';

export class PrestamoPage {
    private linkListarPrestamo = element(by.id('linkListarPrestamo'));
    private linkCrearPrestamo = element(by.id('linkCrearPrestamo'));

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
}
