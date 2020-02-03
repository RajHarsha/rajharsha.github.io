import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftnavbarComponent } from './leftnavbar/leftnavbar.component';
import { MainbarComponent } from './mainbar/mainbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavbarComponent,
    MainbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
