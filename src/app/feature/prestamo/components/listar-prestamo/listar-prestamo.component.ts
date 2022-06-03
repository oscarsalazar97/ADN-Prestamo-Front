import { PrestamoService } from './../../shared/service/prestamo.service';
import { Component, OnInit } from '@angular/core';
import { Prestamo } from '@prestamo/shared/model/prestamo';
import { Observable } from 'rxjs';
import { Abono } from '@prestamo/shared/model/abono';
import { Respuesta } from '@prestamo/shared/model/respuesta';

@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent implements OnInit {
  public prestamos: Observable<Prestamo[]>;
  abono: Abono;

  constructor(protected prestamoService: PrestamoService) {
    
   }

  ngOnInit(): void {
   this.prestamos = this.listaPrestamos();
  }

  abonar(id: number) {
    this.prestamoService.abonar({idPrestamo: id}).subscribe((resp: Respuesta<Abono>) => {
      this.abono = resp.valor;
      this.prestamos = this.listaPrestamos();
    });
  }

  listaPrestamos(): Observable<Prestamo[]> {
    return this.prestamoService.consultar();
  }
}
