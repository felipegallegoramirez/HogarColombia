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
    let date = {
      departamento: this.formExample.value.departament,
      ciudad: this.formExample.value.city,
      direccion: this.formExample.value.departament,
      tipoOferta: this.formExample.value.type,
      pathFotografias: images,
      caracteristicasInternas: [],
      caracteristicasExternas: [],
      asesorId: localStorage.getItem('id'),
      registroCategoriaId: this.formExample.value.category,

      title: this.formExample.value.title,
      description: this.formExample.value.description,
      general: genera,
    };
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

    this.formExample.reset();
  }



  async obtenerCateogry(): Promise<Category[]> {
    let url = 'http://localhost:3000/registro-categorias';
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Category[];
    return datos;
  }
}
