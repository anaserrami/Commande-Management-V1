import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  
  readData:any;
  successmsg:any;
  constructor(private service:ApiserviceService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDataCommande();
  }

  deleteCommandeID(id:any){
    console.log(id, 'delete ==>');
    this.service.deleteDataCommande(id).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataCommande();
    })
  }

  getAllDataCommande(){
    this.service.getAllDataCommande().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;

      // Fetch the user details for each commande
      this.readData.forEach((commande: any) => {
        this.service.getSingleDataUser(commande.idUser).subscribe((userRes) => {
          console.log(userRes, 'userRes ==>');
          commande.user = userRes.data[0];
        });
      });

    // Fetch the commande Etat for each commande
      this.readData.forEach((commande: any) => {
        this.service.getSingleDataCommandeEtat(commande.idEtat).subscribe((commandeEtatRes) => {
          console.log(commandeEtatRes, 'commandeEtatRes ==>');
          commande.commandeEtat = commandeEtatRes.data[0];
        });
      });
    });
  }

  showLigneDeCommandeDetails(idCommande: any) {
    this.router.navigate(['/lignedecommande', 0, idCommande]);
    console.log('showLigneDeCommandeDetails');
    this.service.getSingleDataLigneDeCommande(0, idCommande);
  }
}
