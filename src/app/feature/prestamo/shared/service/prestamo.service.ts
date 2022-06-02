import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { CrearPrestamo } from '../model/crear-prestamo';
import { Prestamo } from '../model/prestamo';
import { Respuesta } from '../model/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Prestamo[]>(`${environment.endpoint}/prestamos`, this.http.optsName('consultar préstamos'));
  }

  public crear(prestamo: CrearPrestamo) {
    return this.http.doPost<CrearPrestamo, Respuesta>(`${environment.endpoint}/prestamo`, prestamo,
    this.http.optsName('crear prestamo'));    
  }
}
