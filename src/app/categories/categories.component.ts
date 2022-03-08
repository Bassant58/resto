import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/category';
import { CategoryService } from '../shared/service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories!:any
  constructor(private CategoryService:CategoryService) { }

  ngOnInit(): void {
   this.CategoryService.getAll().subscribe(categories=>{
    this.categories=categories
    });
 
  }



}
