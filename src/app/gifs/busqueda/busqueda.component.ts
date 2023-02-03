import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  constructor(private gifsSerice: GifsService) {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    this.gifsSerice.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = ' ';
  }
}
