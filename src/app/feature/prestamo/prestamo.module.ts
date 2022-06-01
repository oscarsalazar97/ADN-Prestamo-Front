import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPrestamoComponent } from './components/crear-prestamo/crear-prestamo.component';
import { ListarPrestamoComponent } from './components/listar-prestamo/listar-prestamo.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { PrestamoRoutingModule } from './prestamo-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CrearPrestamoComponent,
    ListarPrestamoComponent,
    PrestamoComponent
  ],
  imports: [
    PrestamoRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    PrestamoComponent
  ]
})
export class PrestamoModule { }
