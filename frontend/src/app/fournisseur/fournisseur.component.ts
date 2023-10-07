import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  constructor(private service:ApiserviceService) {}
  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllDataFournisseur();
  }  

  deleteFournisseurID(id:any){
    console.log(id, 'delete ==>');
    this.service.deleteDataFournisseur(id).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataFournisseur();
    })
  }

  getAllDataFournisseur() {
    this.service.getAllDataFournisseur().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;
  
      // Fetch the user details for each fournisseur
      this.readData.forEach((fournisseur: any) => {
        this.service.getSingleDataUser(fournisseur.idUser).subscribe((userRes) => {
          console.log(userRes, 'userRes ==>');
          fournisseur.user = userRes.data[0];
        });
      });
    });
  }
  
}
