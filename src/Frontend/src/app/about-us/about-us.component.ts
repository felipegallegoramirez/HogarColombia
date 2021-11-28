import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
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