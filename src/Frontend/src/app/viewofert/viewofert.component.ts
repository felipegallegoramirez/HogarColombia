import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inmueble } from '../models/inmueble';
import { Asesor } from '../models/Asesor';

@Component({
  selector: 'app-viewofert',
  templateUrl: './viewofert.component.html',
  styleUrls: ['./viewofert.component.css']
})
export class ViewofertComponent implements OnInit {
   modal:any =null
  constructor(private route: ActivatedRoute) { }
  // @ts-ignore
  dates: Inmueble;
  // @ts-ignore
  asesor: Asesor;
  async ngOnInit(): Promise<void> {
    this.dates= await this.obtenerInmueble(await this.get())
    this.asesor = await this.obtenerAsesor(this.dates.asesorId)
    console.log(this.asesor)
    this.modal=document.querySelector("#modal")
    
  }

  async get (): Promise <string>{
    // @ts-ignore: Object is possibly 'null'
    return this.route.snapshot.paramMap.get('id');
  }



    async obtenerInmueble(id:string): Promise<Inmueble> {
      let url = 'http://localhost:3000/inmuebles/'+id;
      const respuesta = await fetch(url);
      const datos = (await respuesta.json()) as Inmueble;
      return datos;
    }

    async obtenerAsesor(id:string): Promise<Asesor> {
      let url = 'http://localhost:3000/asesors/'+id;
      const respuesta = await fetch(url);
      const datos = (await respuesta.json()) as Asesor;
      console.log(id)
      return datos;
      
    }

    ver () : void{
      // @ts-ignore
        this.modal.classList.remove("disable");
    
      

    }
    cerrar():void{
      // @ts-ignore
        this.modal.classList.add("disable");
    }
    
   async solicitar () :Promise<void> {
    let data= localStorage.getItem('persona')
    //@ts-ignore
    let client=JSON.parse(data)

    let date = {
      tipoSolicitud: this.dates.categoria,
      estadoSolicitud: "Send",
      inmuebleId: this.dates.id,
      asesorId: this.dates.asesorId,
      clienteId: client.id

    }
    let url = 'http://localhost:3000/solicitud-clientes';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(date),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((mensaje) => {
        console.log(mensaje);
      });
     
   }
  

}
