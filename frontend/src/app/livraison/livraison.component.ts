import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
  constructor(private service:ApiserviceService) {}
  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllDataLivraison();
  }

  deleteLivraisonID(idFourniseur: any, idProduit: any){
    console.log(idFourniseur, idProduit, 'delete ==>');
    this.service.deleteDataLivraison(idFourniseur, idProduit).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataLivraison();
    })
  }

  getAllDataLivraison(){
    this.service.getAllDataLivraison().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;

      // Fetch the fournisseur details for each livraison
      this.readData.forEach((livraison: any) => {
        this.service.getSingleDataFournisseur(livraison.idFournisseur).subscribe((fournisseurRes) => {
          console.log(fournisseurRes, 'fournisseurRes ==>');
          livraison.fournisseur = fournisseurRes.data[0];
        });
      });

      // Fetch the produit details for each livraison
      this.readData.forEach((livraison: any) => {
        this.service.getSingleDataProduit(livraison.idProduit).subscribe((produitRes) => {
          console.log(produitRes, 'produitRes ==>');
          livraison.produit = produitRes.data[0];
        });
      });
    });
  }
}
