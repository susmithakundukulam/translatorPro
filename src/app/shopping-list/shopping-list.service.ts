import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  IngredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getShoppingData(){
    return this.ingredients;
  }

  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }

  OnAddtoShoppingList(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }

}
