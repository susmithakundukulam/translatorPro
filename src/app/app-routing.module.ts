import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { InfoEditComponent } from './info/info-edit/info-edit.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ServerRouteComponent } from './server-route/server-route.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [ 
{ path: '', component: HomeComponent},
{ path: 'users', component: UsersComponent, children : [
  { path: ':id/:name', component: UserComponent}
]},
{ path: 'servers', component: ServerRouteComponent, children : [
  { path: ':id/edit', component: ServerRouteComponent}
]},
{ path: 'info', canActivate : [AuthGuardService], component: InfoComponent, children : [                        
  { path: ':id/edit', component: InfoEditComponent}
]},
{path : 'not-found', component: PageNotFoundComponent},
{path: '**' , redirectTo : 'not-found'}];

const appRoutes: Routes = [
  {path: '', redirectTo:'/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children : [
    {path : '', component: RecipeStartComponent},
    {path : ':id', component: RecipeDetailComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

const appRoutesTest: Routes = [
 
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutesTest)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
