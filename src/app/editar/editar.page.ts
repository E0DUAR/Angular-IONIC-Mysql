import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  
  
  datos:any={
    id:'',
    nombre:'',
    correo:'',
    universidad:''
  }

  constructor(private http:HttpClient, private user:UserService) { 
    this.datos.id=user.getId();
    this.datos.nombre=user.getNombre();
    this.datos.correo=user.getCorreo();
    this.datos.universidad=user.getUniversidad();
  }

  ngOnInit() {

  }





  editar() {
    const url = `http://localhost/proyectos/crud-php-to-webservice/editar.php?id=${this.datos.id}&nombre=${this.datos.nombre}&correo=${this.datos.correo}&universidad=${this.datos.universidad}`;
  
    this.http.get(url).subscribe({
      next: (response) => {
        console.log(response);
        //RECARGAR PÁGINA PRINCIPAL DESPUÉS DE EDITAR UN REGISTRO
        window.location.reload();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  
  

}
