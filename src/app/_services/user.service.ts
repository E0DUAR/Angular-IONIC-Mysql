import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id:string='';
  nombre:string='';
  correo:string='';
  universidad:string='';

  constructor() { }

  setId(id:string){
    this.id = id;
  }
  getId(){
    return this.id;
  }

  setNombre(nombre:string){
    this.nombre = nombre;
  }
  getNombre(){
    return this.nombre;
  }

  setCorreo(correo:string){
    this.correo = correo;
  }
  getCorreo(){
    return this.correo;
  }

  setUniversidad(universidad:string){
    this.universidad = universidad;
  }
  getUniversidad(){
    return this.universidad;
  }
  
}
