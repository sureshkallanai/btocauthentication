import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'base', loadChildren: () => import('./base/base.module').then(m => m.BaseModule) },
   {path: '', redirectTo: '/base/login',  pathMatch: 'prefix'}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
