import { Component, OnInit } from '@angular/core';
import { CategoryView } from '../models/CategoryView'
import { Category} from '../models/Category'

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
