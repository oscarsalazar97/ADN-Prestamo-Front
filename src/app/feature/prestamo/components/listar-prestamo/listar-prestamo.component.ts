import { consultarPrestamos } from './../../shared/redux/prestamo.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Prestamo } from '@prestamo/shared/model/prestamo';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent implements OnInit {
  prestamos$: Observable<Prestamo[]>
  prestamos!: Prestamo[];
  subscription: Subscription;

  constructor(private store: Store<{prestamo: any}>) {
    this.prestamos$ = this.store.select((state) => state.prestamo);
   }

  ngOnInit(): void {
    this.store.dispatch({type: consultarPrestamos});
    this.subscription = this.prestamos$.subscribe((data: Prestamo[]) => {
      this.prestamos = data;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
