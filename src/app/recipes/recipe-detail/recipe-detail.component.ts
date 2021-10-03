import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private route :Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipesbyId(this.id);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.AddtoShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.route.navigate(['edit'] , {relativeTo : this.activatedRoute});
  }

}
