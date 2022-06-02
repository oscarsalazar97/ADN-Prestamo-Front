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

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
