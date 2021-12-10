import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { query } from '@angular/animations';
import { CategoryView } from '../models/CategoryView'
import { Inmueble } from '../models/inmueble';

@Component({
  selector: 'app-createofert',
  templateUrl: './createofert.component.html',
  styleUrls: ['./createofert.component.css'],
})
export class CreateofertComponent implements OnInit {
  constructor() {}
  cat: Array<Category> = [];

  formExample = new FormGroup({
    type: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    departament: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    rooms: new FormControl('', [Validators.required]),
    roomsl: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    sizen: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  formFile = new FormGroup({
    file: new FormControl('', [Validators.required]),
  });

  async ngOnInit(): Promise<void> {
    this.cat = await this.obtenerCateogry();
  }

  async image(files: File): Promise<String> {
    let url = 'http://localhost:3000/CargarImagen';
    let fd = new FormData();
    fd.append('file', files);
    let asd = await fetch(url, {
      method: 'POST',
      // @ts-ignore: Object is possibly 'null'
      body: fd,
    })
      .then((res) => res.json())
      .then((mensaje) => {
        return mensaje.filename;
      });

    return asd;

  }

  async obtenerViewsD(id: string): Promise<string>{

    let url = 'http://localhost:3000/registro-categorias/'+id;
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Category;

    return await this.obtenerViews(datos.categoriaBusquedaId)
  
  }

  async obtenerViews(id: string): Promise<string>{

    
    let url1= "http://localhost:3000/categoria-busquedas/"+id
    const respuesta1 = await fetch(url1)
    const datos1 = await respuesta1.json() as CategoryView
    console.log(datos1)
    return datos1.nombre
  
  }

  async send(): Promise<void> {
    let url = 'http://localhost:3000/inmuebles';

    let a = <HTMLInputElement>document.querySelector('#files');
    let images: String[] = ['', '', '', ''];
    for (let i = 0; i <= 4; i++) {
      // @ts-ignore: Object is possibly 'null'
      images[i] = await this.image(a.files[i]);
    }

    let genera = [
      String(this.formExample.value.price),
      String(this.formExample.value.rooms),
      String(this.formExample.value.roomsl),
      String(this.formExample.value.size),
      String(this.formExample.value.sizen),
      String(this.formExample.value.age),
    ];
    let data= localStorage.getItem('persona')
    //@ts-ignore
    let asesor=JSON.parse(data)

    let noc=await this.obtenerViewsD(this.formExample.value.category)
    let date = {
      departamento: this.formExample.value.departament,
      ciudad: this.formExample.value.city,
      direccion: this.formExample.value.departament,
      tipoOferta: this.formExample.value.type,
      pathFotografias: images,
      caracteristicasInternas: [],
      caracteristicasExternas: [],
      asesorId: asesor.id,
      registroCategoriaId: this.formExample.value.category,

      title: this.formExample.value.title,
      description: this.formExample.value.description,
      general: genera,
      categoria: noc
    };

    console.log(date)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(date),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((mensaje) => {
        
        let ventana= mensaje as Inmueble
        console.log(ventana)
        window.location.replace("http://localhost:4200/previewpublish/"+ventana.id);
        
      });

    this.formExample.reset();
  }



  async obtenerCateogry(): Promise<Category[]> {
    let url = 'http://localhost:3000/registro-categorias';
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Category[];
    return datos;
  }
}
