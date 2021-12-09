import { Component, OnInit } from '@angular/core';
import { CategoryView } from '../models/CategoryView'
import { Category} from '../models/Category'
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  
  formExample = new FormGroup({

    name: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    Participation: new FormControl('',[Validators.required]),



  });

  constructor() { }
  cat:Array<CategoryView> =[]
  async ngOnInit():Promise<void> {
    this.cat = await this.obtenerViews();
    console.log(this.cat)


  }

  
  async obtenerViews(): Promise<CategoryView[]>{
    
    let url = "http://localhost:3000/categoria-busquedas"
    const respuesta = await fetch(url)
    const datos = await respuesta.json() as CategoryView[]
    return datos
  
  }


  async send(): Promise<void>{
    let url = "http://localhost:3000/registro-categorias"
    let date = {
      nombre: this.formExample.value.name,
      categoriaBusquedaId: this.formExample.value.category,
      descripcion:this.formExample.value.description,
      porcentajeParticipacion: this.formExample.value.Participation,
    }
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(date),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })

    this.formExample.reset()
  }


  


}
