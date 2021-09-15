import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
}) 
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe("Delicious Meat Berger", 
    "Spicy and juicy", 
    "https://food-images.files.bbci.co.uk/food/recipes/spicybeefburger_71357_16x9.jpg",
    [new Ingredient("Meat", 10), new Ingredient("Fish", 10)]
    ),
    
    new Recipe("Tasty Orange Cake",
     "Sweet and Juicy",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2384247.jpg&w=380&h=380&c=sc&poi=face&q=85",
      [new Ingredient("Orange", 10), new Ingredient("bread", 20)]
      )
  ];
  constructor(private shoppingService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  AddtoShoppingList(ingredients: Ingredient[]){
    this.shoppingService.OnAddtoShoppingList(ingredients);
  }
}
