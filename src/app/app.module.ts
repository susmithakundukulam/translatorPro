import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { TopPageComponent } from './top-page/top-page.component';
import { BottomPageComponent } from './bottom-page/bottom-page.component';
import { EvenNumbersComponent } from './even-numbers/even-numbers.component';
import { OddNumbersComponent } from './odd-numbers/odd-numbers.component';
import { GameControlComponent } from './game-control/game-control.component';



@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CocktailComponent,
    ServerElementComponent,
    TopPageComponent,
    BottomPageComponent,
    EvenNumbersComponent,
    OddNumbersComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


