import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta } from '@prestamo/shared/model/respuesta';
import { PrestamoRespuesta } from './../../shared/model/prestamo-respuesta';
import { PrestamoService } from './../../shared/service/prestamo.service';

const minimo = 2;
const maximo = 2;
@Component({
  selector: 'app-crear-prestamo',
  templateUrl: './crear-prestamo.component.html',
  styleUrls: ['./crear-prestamo.component.css']
})

export class CrearPrestamoComponent implements OnInit {
  prestamoForm: FormGroup;
  prestamoRespuesta: PrestamoRespuesta;
  constructor(protected prestamoService: PrestamoService, private router: Router) {
  }

  ngOnInit(): void {
    this.construirFormularioPrestamo();
  }

  crear() {
    this.prestamoService.crear(this.prestamoForm.value).subscribe((resp: Respuesta)=> {
      this.prestamoRespuesta = resp.valor;
      this.router.navigate(['/prestamo/listar']);
    });
   }

  private construirFormularioPrestamo() {
    this.prestamoForm = new FormGroup({
      idCliente : new FormControl('', Validators.required),
      monto : new FormControl('', Validators.required),
      porcentajeInteres : new FormControl('', Validators.required),
      cantidadCuotas : new FormControl('', [Validators.required, Validators.min(maximo), Validators.max(minimo)]),
      formaPago: new FormControl('', Validators.required)     
    });
  }
}






