import { Trm } from './../model/trm';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrmService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Trm>(`${environment.endpoint}/trm`, this.http.optsName('consultar TRM'));
  }
}
