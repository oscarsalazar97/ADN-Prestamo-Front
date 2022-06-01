import { crearPrestamo } from './../../shared/redux/prestamo.action';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-prestamo',
  templateUrl: './crear-prestamo.component.html',
  styleUrls: ['./crear-prestamo.component.css']
})
export class CrearPrestamoComponent implements OnInit {
  prestamoForm: FormGroup;
  constructor(private store: Store<{prestamo: any}>, private router: Router) {

  }

  ngOnInit(): void {
    this.construirFormularioPrestamo();
  }

  crear() {
    console.log(this.prestamoForm.value);
    this.store.dispatch({type: crearPrestamo, prestamo: this.prestamoForm.value });
    this.prestamoForm.reset();
    this.router.navigate(['/prestamo/listar']);
  }

  private construirFormularioPrestamo() {
    this.prestamoForm = new FormGroup({
      idCliente : new FormControl('', Validators.required),
      monto : new FormControl('', Validators.required),
      porcentajeInteres : new FormControl('', Validators.required),
      cantidadCuotas : new FormControl('', [Validators.required, Validators.min(2), Validators.max(4)]),
      formaPago: new FormControl('', Validators.required)     
    });
  }
}






