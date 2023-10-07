import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  constructor(private service:ApiserviceService) {}
  readData:any;
  successmsg:any;
  ngOnInit(): void {
    this.getAllDataCategorie();
  }

  deleteCategorieID(id:any){
    console.log(id, 'delete ==>');
    this.service.deleteDataCategorie(id).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataCategorie();
    })
  }

  getAllDataCategorie(){
    this.service.getAllDataCategorie().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;
    });
  }
}
