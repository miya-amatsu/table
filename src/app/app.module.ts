import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {  DxSelectBoxModule,DxTagBoxModule, DxTemplateModule } from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSelectBoxModule,DxTagBoxModule, DxTemplateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
