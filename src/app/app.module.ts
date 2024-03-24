import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProdottiComponent } from './prodotti/prodotti.component';

@NgModule({
  declarations: [
    ProdottiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProdottiComponent]
})
export class AppModule { }
