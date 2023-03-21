import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  id:string='';
  
  datos:any={
    nombre:'',
    correo:'',
    universidad:''
  }

  constructor(private http:HttpClient, private user:UserService) { 
    this.id=user.getId();
  }

  ngOnInit() {

  }

  editar(){
    this.http.get('http://localhost/proyectos/crud-php-to-webservice/editar.php?id='+this.datos.id+'&nombre='+this.datos.nombre+'&correo='+this.datos.correo+'&universidad='+this.datos.universidad).subscribe((snap) => {
      console.log(snap);
    });
  }

}

