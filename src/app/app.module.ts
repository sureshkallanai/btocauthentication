import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { customBeareTokenInterceptor } from './service/custom-beare-token.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgGridAngular } from 'ag-grid-angular';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridAngular
  ],
  providers: [provideHttpClient(),
    provideAnimationsAsync(),provideHttpClient(withInterceptors([customBeareTokenInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
