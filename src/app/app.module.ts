import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';

import { EspecialesComponent } from './especiales/especiales.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    EspecialesComponent,
    RecomendacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
