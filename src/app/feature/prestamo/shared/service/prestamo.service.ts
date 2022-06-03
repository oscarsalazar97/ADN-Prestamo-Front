import { PrestamoRespuesta } from '@prestamo/shared/model/prestamo-respuesta';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { CrearPrestamo } from '../model/crear-prestamo';
import { Prestamo } from '../model/prestamo';
import { Respuesta } from '../model/respuesta';
import { Abono } from '../model/abono';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Prestamo[]>(`${environment.endpoint}/prestamos`, this.http.optsName('consultar préstamos'));
  }

  public crear(prestamo: CrearPrestamo) {
    return this.http.doPost<CrearPrestamo, Respuesta<PrestamoRespuesta>>(`${environment.endpoint}/prestamo`, prestamo,
    this.http.optsName('crear prestamo'));    
  }

  public abonar(abono: Abono) {
    return this.http.doPost<Abono, Respuesta<Abono>>(`${environment.endpoint}/abono`, abono,
    this.http.optsName('crear abono'));    
  }
}
