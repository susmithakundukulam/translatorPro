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
import { BasicHighlightDirective } from 'src/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { MuchBetterHighlightDirective } from './muchbetter-highlight/much-better-highlight.directive';
import { MuchBetterHighlightbindDirective } from './muchbetter-highlight/much-better-highlightbind.directive';
import { MuchBetterHighlightCustomBindDirective } from './muchbetter-highlight/much-better-highlight-custom-bind.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoggingService } from './logging.service';
import { TestForServiceComponent } from './test-for-service/test-for-service.component';
import { TestForService1Component } from './test-for-service1/test-for-service1.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersServiceService } from './users-service.service';
import { CounterService } from './counter.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServerRouteComponent } from './server-route/server-route.component';
import { RouteheaderComponent } from './routeheader/routeheader.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { InfoComponent } from './info/info.component';
import { InfoEditComponent } from './info/info-edit/info-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { CameraTestComponent } from './camera-test/camera-test.component';
import { WebcamModule } from 'ngx-webcam';


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
    GameControlComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    MuchBetterHighlightDirective,
    MuchBetterHighlightbindDirective,
    MuchBetterHighlightCustomBindDirective,
    DropdownDirective,
    TestForServiceComponent,
    TestForService1Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UsersComponent,
    HomeComponent,
    ServerRouteComponent,
    RouteheaderComponent,
    UserComponent,
    InfoComponent,
    InfoEditComponent,
    PageNotFoundComponent,
    RecipeStartComponent,
    CameraTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule
  ],
  providers: [LoggingService, 
    UsersServiceService, 
    CounterService, 
    ShoppingListService, 
    AuthService,
    AuthGuardService], //no need of it if above angular 6
  bootstrap: [AppComponent]
})
export class AppModule { }


