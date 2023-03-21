import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listado: any;

  constructor(private http: HttpClient) {
    //CONSULTAR DE LA BASE DE DATOS
    this.http.get('http://localhost/proyectos/crud-php-to-webservice/consultados.php').subscribe((snap) => {
        console.log(snap);
        this.listado = snap;
      });
  }

  
  eliminar(id:string){
    this.http.get('http://localhost/proyectos/crud-php-to-webservice/eliminar.php?id='+id).subscribe((snap) => {
      console.log(snap);
    });
  }


}
