import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ProduitsComponent } from './produits/produits.component';
import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    ProduitsComponent,
    AjoutCommandeComponent,
    AjoutProduitComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
