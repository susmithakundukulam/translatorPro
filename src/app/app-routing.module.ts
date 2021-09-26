import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { InfoEditComponent } from './info/info-edit/info-edit.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerRouteComponent } from './server-route/server-route.component';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
