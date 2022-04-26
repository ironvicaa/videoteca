import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ResultTMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }
  // Este servicio se consumira en tab1
  
  //Creamos un metodo llamado getDiscover
  /*Ciclo vida
  Analisis
  Diseño

  Implementar(ponerlo en produccion)
  importar 
  */
  getDiscover() {
    return this.http.get<ResultTMDB>('https://api.themoviedb.org/3/discover/movie?api_key=bdc55635f4af0e096652bd2bb2b6c561&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31')
  }
}
  