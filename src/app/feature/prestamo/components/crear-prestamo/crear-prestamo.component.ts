import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Respuesta } from '@prestamo/shared/model/respuesta';
import { PrestamoRespuesta } from './../../shared/model/prestamo-respuesta';
import { PrestamoService } from './../../shared/service/prestamo.service';

const minimoCuotas = 2;
const maximoCuotas = 4;
const minimoPorcentaje = 2;
const minimoMonto = 100000;

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
    this.prestamoService.crear(this.prestamoForm.value).subscribe((resp: Respuesta<PrestamoRespuesta>)=> {
      this.prestamoRespuesta = resp.valor;
      this.router.navigate(['/prestamo/listar']);
    });
   }

  private construirFormularioPrestamo() {
    this.prestamoForm = new FormGroup({
      idCliente : new FormControl('', Validators.required),
      monto : new FormControl('', [Validators.required, Validators.min(minimoMonto)]),
      porcentajeInteres : new FormControl('', [Validators.required, Validators.min(minimoPorcentaje)]),
      cantidadCuotas : new FormControl('', [Validators.required, Validators.min(minimoCuotas), Validators.max(maximoCuotas)]),
      formaPago: new FormControl('', Validators.required)     
    },
    );
  }
}






