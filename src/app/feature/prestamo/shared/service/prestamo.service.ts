import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { CrearPrestamo } from '../model/crear-prestamo';
import { Prestamo } from '../model/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Prestamo[]>(`${environment.endpoint}/prestamos`, this.http.optsName('consultar préstamos'));
  }

  public crear(prestamo: CrearPrestamo) {
    console.log("SERVICE");
    console.log(prestamo);
    return this.http.doPost<CrearPrestamo, Prestamo>(`${environment.endpoint}/prestamo`, prestamo,
    this.http.optsName('crear prestamo'));    
  }
}
