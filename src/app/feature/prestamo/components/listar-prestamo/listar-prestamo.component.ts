import { PrestamoService } from './../../shared/service/prestamo.service';
import { Component, OnInit } from '@angular/core';
import { Prestamo } from '@prestamo/shared/model/prestamo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent implements OnInit {
  public prestamos: Observable<Prestamo[]>

  constructor(protected prestamoService: PrestamoService) {
    
   }

  ngOnInit(): void {
   this.prestamos = this.prestamoService.consultar();
  }
}
