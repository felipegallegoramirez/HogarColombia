import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createofert',
  templateUrl: './createofert.component.html',
  styleUrls: ['./createofert.component.css']
})
export class CreateofertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  formExample = new FormGroup({

    name: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    departament: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    Identification: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    edad: new FormControl('',[Validators.required]),
    genero: new FormControl(''),

  });


}
