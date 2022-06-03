import { AppPage } from '../app.po';
import { PrestamoPage } from '../page/prestamo/prestamo.po';
import { browser, logging } from 'protractor';

describe('workspace-project Prestamo', () => {
    let page: AppPage;
    let prestamo: PrestamoPage;

    beforeEach(() => {
        page = new AppPage();
        prestamo = new PrestamoPage();
    });

    it('Deberia listar prestamos', async () => {
        page.navigateTo();
        prestamo.clickBotonListarPrestamos();        
        
        expect(3).toBe(prestamo.contarPrestamos());
    });

    it('Deberia crear prestamo', () => {
      const ID_CLIENTE = 3;
      const MONTO = 120000;
      const CANTIDAD_CUOTAS = 2;
      const FORMA_PAGO = "SEMANAL";
      const PORCENTAJE_INTERES = 20.0;

      page.navigateTo();
      prestamo.clickBotonCrearPrestamo();
      prestamo.ingresarIdCliente(ID_CLIENTE);
      prestamo.ingresarMonto(MONTO);
      prestamo.ingresarCantidadCuotas(CANTIDAD_CUOTAS);
      prestamo.ingresarFormaPago(FORMA_PAGO);
      prestamo.ingresarPorcentajeInteres(PORCENTAJE_INTERES);
      prestamo.formCrearPrestamo();

      expect(4).toBe(prestamo.contarPrestamos());
      // Adicionamos las validaciones despues de la creación
      // expect(<>).toEqual(<>);
  });

  it('Deberia abonar', () => {
    
    page.navigateTo();
    prestamo.clickBotonListarPrestamos();      
    const saldoAnterior = prestamo.verSaldoPrestamo();    
    prestamo.clickBotonAbonarPrestamo();
    const saldoNuevo = prestamo.verSaldoPrestamo();

    expect(saldoAnterior).toEqual("$144,000.00");
    expect(saldoNuevo).toEqual("$72,000.00");
    expect(4).toBe(prestamo.contarPrestamos());
});

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
