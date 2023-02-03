import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styles: [],
})
export class Sidebar2Component {
  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {}
  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }
}
