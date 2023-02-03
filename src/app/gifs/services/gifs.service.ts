import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'HELlUo1AQfrA8eWIYndGueEF4BCU5OEC';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    }

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?key=HELlUo1AQfrA8eWIYndGueEF4BCU5OEC&q=${query}&limit=10`
      )
      .subscribe((resp: SearchGifsResponse) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}
