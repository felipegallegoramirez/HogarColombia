import { Component, OnInit } from '@angular/core';
import {Cliente} from './models/Cliente'
import {Asesor} from './models/Asesor'
import {administrador} from './models/administrador'
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'House';
  nombre:string = ""

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.getElementById("About Us")!.style.display = "inline-block"
    console.log("buenas")
    this.menu()
  }

  menu(): void {
    console.log("hola")
    let data= localStorage.getItem('persona')
    
    if(data) { 
      console.log(data)
      let usuario = JSON.parse(data)
      this.nombre = usuario.nombre +" " + usuario.apellido + "  "
      switch (usuario.rol){
        case 'admin':
          this.menuAdmin(usuario as administrador)
          break;
        case 'client':
          this.menuCliente(usuario as Cliente)  
          break;
        case 'asesor':
          this.menuAsesor(usuario as Asesor)
          break;
      }
    }else {
      console.log("nel perro")
      document.getElementById("Search")!.style.display = "inline-block"
      document.getElementById("My requests")!.style.display = "none";
      
      document.getElementById("My statistics")!.style.display = "none";
      document.getElementById("Create inmueble")!.style.display = "none";
      document.getElementById("Requests")!.style.display = "none";
  
      document.getElementById("Registration category")!.style.display = "none";
      document.getElementById("Data")!.style.display = "none";
      document.getElementById("Order Viewer")!.style.display = "none";

      document.getElementById("login")!.style.display = "inline-block"
      document.getElementById("icono")!.style.display = "inline-block"
      document.getElementById("salir")!.style.display = "none";
      document.getElementById("nombre")!.style.display = "none";
    }
  }
  
  menuCliente( usuario: Cliente){
    document.getElementById("Search")!.style.display = "inline-block"
    document.getElementById("My requests")!.style.display = "inline-block"
    
    document.getElementById("My statistics")!.style.display = "none";
    document.getElementById("Create inmueble")!.style.display = "none";
    document.getElementById("Requests")!.style.display = "none";

    document.getElementById("Registration category")!.style.display = "none";
    document.getElementById("Data")!.style.display = "none";
    document.getElementById("Order Viewer")!.style.display = "none";

    document.getElementById("login")!.style.display = "none"
    document.getElementById("icono")!.style.display = "none"
    document.getElementById("salir")!.style.display = "inline-block";
    document.getElementById("nombre")!.style.display = "inline-block";
  }
  
  menuAsesor( usuario: Asesor){
    document.getElementById("Search")!.style.display = "none";
    document.getElementById("My requests")!.style.display = "none";
    
    document.getElementById("My statistics")!.style.display = "inline-block"
    document.getElementById("Create inmueble")!.style.display = "inline-block"
    document.getElementById("Requests")!.style.display = "inline-block"

    document.getElementById("Registration category")!.style.display = "none";
    document.getElementById("Data")!.style.display = "none";
    document.getElementById("Order Viewer")!.style.display = "none";

    document.getElementById("login")!.style.display = "none"
    document.getElementById("icono")!.style.display = "none"
    document.getElementById("salir")!.style.display = "inline-block";
    document.getElementById("nombre")!.style.display = "inline-block";
  }
  
  menuAdmin( usuario: administrador){
    document.getElementById("Search")!.style.display = "none";
    document.getElementById("My requests")!.style.display = "none";
    
    document.getElementById("My statistics")!.style.display = "none";
    document.getElementById("Create inmueble")!.style.display = "none";
    document.getElementById("Requests")!.style.display = "none";

    document.getElementById("Registration category")!.style.display = "inline-block"
    document.getElementById("Data")!.style.display = "inline-block"
    document.getElementById("Order Viewer")!.style.display = "inline-block"

    document.getElementById("login")!.style.display = "none"
    document.getElementById("icono")!.style.display = "none"
    document.getElementById("salir")!.style.display = "inline-block";
    document.getElementById("nombre")!.style.display = "inline-block";
  }

  cerrarSesion(): void{
    localStorage.removeItem("persona");
    window.location.replace("http://localhost:4200/aboutus");
  }

}
