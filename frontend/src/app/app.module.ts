import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { CommandeComponent } from './commande/commande.component';
import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { CommandeetatComponent } from './commandeetat/commandeetat.component';
import { RoleComponent } from './role/role.component';
import { LignedecommandeComponent } from './lignedecommande/lignedecommande.component';

import { AddUserComponent } from './add-user/add-user.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddLivraisonComponent } from './add-livraison/add-livraison.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddCommandeetatComponent } from './add-commandeetat/add-commandeetat.component';
import { PaysComponent } from './pays/pays.component';
import { AddPaysComponent } from './add-pays/add-pays.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FournisseurComponent,
    CommandeComponent,
    ProduitComponent,
    CategorieComponent,
    LivraisonComponent,
    CommandeetatComponent,
    RoleComponent,
    LignedecommandeComponent,
    AddUserComponent,
    AddFournisseurComponent,
    AddCommandeComponent,
    AddProduitComponent,
    AddCategorieComponent,
    AddLivraisonComponent,
    AddRoleComponent,
    AddCommandeetatComponent,
    PaysComponent,
    AddPaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
