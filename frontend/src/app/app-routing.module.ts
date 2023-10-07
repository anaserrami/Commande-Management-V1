import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { CommandeComponent } from './commande/commande.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { AddLivraisonComponent } from './add-livraison/add-livraison.component';
import { CommandeetatComponent } from './commandeetat/commandeetat.component';
import { AddCommandeetatComponent } from './add-commandeetat/add-commandeetat.component';
import { RoleComponent } from './role/role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { PaysComponent } from './pays/pays.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { LignedecommandeComponent } from './lignedecommande/lignedecommande.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-user/:id', component: AddUserComponent },
  { path: 'user', component: UserComponent },
  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'add-fournisseur/:id', component: AddFournisseurComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'add-produit/:id', component: AddProduitComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'add-commande', component: AddCommandeComponent },
  { path: 'add-commande/:id', component: AddCommandeComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'add-categorie', component: AddCategorieComponent },
  { path: 'add-categorie/:id', component: AddCategorieComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'add-livraison', component: AddLivraisonComponent },
  { path: 'add-livraison/:idFournisseur/:idProduit', component: AddLivraisonComponent },
  { path: 'livraison', component: LivraisonComponent },
  { path: 'add-commandeetat', component: AddCommandeetatComponent },
  { path: 'add-commandeetat/:id', component: AddCommandeetatComponent },
  { path: 'commandeetat', component: CommandeetatComponent },
  { path: 'add-role', component: AddRoleComponent },
  { path: 'add-role/:id', component: AddRoleComponent },
  { path: 'role', component: RoleComponent },
  { path: 'add-pays', component: AddPaysComponent },
  { path: 'add-pays/:id', component: AddPaysComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'lignedecommande', component: LignedecommandeComponent },
  { path: 'lignedecommande/:idProduit/:idCommande', component: LignedecommandeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
