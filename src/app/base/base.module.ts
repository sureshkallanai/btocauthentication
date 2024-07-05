import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { AuthComponent } from '../auth/auth.component';
import { FormsModule }   from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { DataComponent } from './data/data.component';
import { UsersComponent } from './users/users.component';
import { AgGridAngular } from 'ag-grid-angular';

@NgModule({
  declarations: [
    BaseComponent,
    AuthComponent,
    LandingComponent,
    DataComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    AgGridAngular
  ],
  providers:[provideHttpClient()]
})
export class BaseModule { }
