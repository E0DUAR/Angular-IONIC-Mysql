import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  datos:any={
    nombre:'',
    correo:'',
    universidad:''
  };

  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  save(){
    this.http.get('http://localhost/proyectos/crud-php-to-webservice/guardar.php?nombre='+this.datos.nombre+'&correo='+this.datos.correo+'&universidad='+this.datos.universidad+'').subscribe((snap) => {
      console.log(snap);

    });
  }

}
