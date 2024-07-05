import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [ 
 { path: 'landing', component: LandingComponent },
  { path: 'login', component: AuthComponent },
  { path: 'user', component: UsersComponent },
  { path: 'data', component: DataComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
