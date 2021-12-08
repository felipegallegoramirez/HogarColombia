import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  type:string;
  price:string;
  state:string;
  ubication:string;
  size:string;

  constructor() {
    this.type="Apartament"
    this.state="Sale"
    this.price="123124143"
    this.ubication="Medellin"
    this.size="128"
   }

  ngOnInit(): void {
  }

}
