import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-lignedecommande',
  templateUrl: './lignedecommande.component.html',
  styleUrls: ['./lignedecommande.component.css']
})
export class LignedecommandeComponent implements OnInit {
  constructor(private service: ApiserviceService,private route: ActivatedRoute) { }
  
  readData: any;
  successmsg: any;

  ngOnInit(): void {
    const idProduit = this.route.snapshot.params['idProduit'];
    const idCommande = this.route.snapshot.params['idCommande'];
  
    console.log('idProduit:', idProduit);
    console.log('idCommande:', idCommande);
    // this.service.getSingleDataLigneDeCommande(0, idCommande);
    if(idProduit==0&&idCommande>=0){
      console.log("this work ")
      this.service.getSingleDataLigneDeCommande(0, idCommande).subscribe(res=>{
        console.log(res)
        this.readData=res.data

        this.readData.forEach((lignedecommande: any) => {
          this.service.getSingleDataProduit(lignedecommande.idProduit).subscribe((produitRes) => {
            console.log(produitRes, 'produitRes ==>');
            lignedecommande.produit = produitRes.data[0];
          });
        });

              // Fetch the commands details for each ligne de commande
      this.readData.forEach((lignedecommande: any) => {
        this.service.getSingleDataCommande(lignedecommande.idCommande).subscribe((commandeRes) => {
          console.log(commandeRes, 'commandeRes ==>');
          lignedecommande.commande = commandeRes.data[0];
        });
      });


      });
    }else{
      this.getAllDataLigneDeCommande()
    }
  }

  deleteLigneDeCommandeID(idProduit: any, idCommande: any) {
    console.log(idProduit, idCommande, 'delete ==>');
    this.service.deleteDataLigneDeCommande(idProduit, idCommande).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataLigneDeCommande();
    });
  }

  getAllDataLigneDeCommande() {
    this.service.getAllDataLigneDeCommande().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;

      // Fetch the products details for each ligne de commande
      this.readData.forEach((lignedecommande: any) => {
        this.service.getSingleDataProduit(lignedecommande.idProduit).subscribe((produitRes) => {
          console.log(produitRes, 'produitRes ==>');
          lignedecommande.produit = produitRes.data[0];
        });
      });

      // Fetch the commands details for each ligne de commande
      this.readData.forEach((lignedecommande: any) => {
        this.service.getSingleDataCommande(lignedecommande.idCommande).subscribe((commandeRes) => {
          console.log(commandeRes, 'commandeRes ==>');
          lignedecommande.commande = commandeRes.data[0];
        });
      });
    });
  }
}
