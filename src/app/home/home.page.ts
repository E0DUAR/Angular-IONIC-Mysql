import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listado: any;

  constructor(private http: HttpClient) {
    //CONSULTAR DE LA BASE DE DATOS
    this.http
      .get('http://localhost/proyectos/crud-php-to-webservice/consultados.php')
      .subscribe((snap) => {
        console.log(snap);
        this.listado = snap;
      });
  }
}
