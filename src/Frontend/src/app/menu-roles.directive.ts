import { Directive, ElementRef } from '@angular/core';
import {OnInit } from '@angular/core';
@Directive({
  selector: '[appMenuRoles]'
})
export class MenuRolesDirective {

  elemento:ElementRef;

  constructor(element: ElementRef) {
    this.elemento = element
  }

}
