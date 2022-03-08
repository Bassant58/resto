import { Component, OnInit ,Input} from '@angular/core';
import { Category } from 'src/app/shared/model/category';
import { Meal } from 'src/app/shared/model/meal';
import { FavouriteService } from 'src/app/shared/service/favourite.service';
import { MealService } from 'src/app/shared/service/meal.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {
  meals!:any
  @Input() category!:Category;
  constructor(private MealService:MealService,private favouriteService:FavouriteService) { }

  ngOnInit(): void {
    this.MealService.getAll().subscribe((meals)=>{
      this.meals=meals
      this.meals=this.meals.filter((meal:Meal)=>{
      return meal.category_id==this.category.id
})      
});
}

}
