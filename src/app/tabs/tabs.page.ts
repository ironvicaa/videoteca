import { Component, OnInit } from '@angular/core';
import { DataMoviesService } from '../services/data-movies.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor( private dataMovies: DataMoviesService) {}

  ngOnInit(): void {
    //ngOnInit, metodo que se ejeucta
    // cuando se carga el componente
    //Debemos invocar el metodo dew nuestro servicio
    this.dataMovies.getDiscover();
    //lo anterior lo guardamos en un observable
  }

}
