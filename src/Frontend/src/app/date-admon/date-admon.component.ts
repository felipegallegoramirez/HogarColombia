import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-admon',
  templateUrl: './date-admon.component.html',
  styleUrls: ['./date-admon.component.css']
})
export class DateAdmonComponent implements OnInit {

  formExample = new FormGroup({

    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    departament: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    Identification: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),

});

  constructor() {
    

    
   }

  ngOnInit(): void {
    /*

    */
  }

  send():any{
    console.log(this.formExample)
  }

}
