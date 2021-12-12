import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { AppComponent } from '../app.component';
import{ Inmueble } from '../models/inmueble'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  size:number;

  constructor() {
    this.size=128
   }

   cat: Array<Inmueble> = [];

   async ngOnInit(): Promise<void> {
    this.cat = await this.obtenerCateogry();
    this.size = this.cat.length
  }


  redirect(id:string):void {
    window.location.replace("http://localhost:4200/view/"+id);
  }


  async obtenerCateogry(): Promise<Inmueble[]> {
    let url = 'http://localhost:3000/inmuebles';
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Inmueble[];
    return datos;
  }

  public reset: any[] = [{}];

  async onRecreate(): Promise<void> {

      this.cat = [];
      let asd = await this.obtenerCateogry();
      this.cat= asd.filter(this.filtro)
      this.size = this.cat.length
  }

  filtro(asd:Inmueble){

    let a = <HTMLInputElement>document.querySelector('#city')
    let b = <HTMLInputElement>document.querySelector('#type')
    let c = <HTMLInputElement>document.querySelector('#ofert')

    

  let g= false
  if ((asd.categoria==c.value || c.value=="")&&(asd.ciudad==a.value || a.value=="")&&(asd.tipoOferta==b.value || b.value=="")){
    g=true;
    console.log(a.value , b.value , c.value)
  }
  
  return g

  }

}
