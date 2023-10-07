import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  constructor(private service:ApiserviceService, private router:ActivatedRoute) {}
  
  errormsg:any;
  successmsg:any;
  getparamid:any;
  admins: any[] = []; // Store the list of admins
  categories: any[] = []; // Store the list of categories

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.service.getSingleDataProduit(this.getparamid).subscribe((res) => {
        console.log(res, 'res ==>');
        this.produitForm.patchValue({
          idUser: res.data[0].idUser,
          idCategorie: res.data[0].idCategorie,
          nom: res.data[0].nom,
          description: res.data[0].description,
          qteStock: res.data[0].qteStock,
          prix: res.data[0].prix
        });
      });
    }
    // Fetch the list of admins
    this.service.getUserByRole('Admin').subscribe((res) => {
      this.admins = res.data;
    });
    // Fetch the list of categories
    this.service.getAllDataCategorie().subscribe((res) => {
      this.categories = res.data;
    });
  }

  produitForm = new FormGroup({
    idUser: new FormControl('', Validators.required),
    idCategorie: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    qteStock: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),
  });

  produitSubmit() {
    if (this.produitForm.valid) {
      console.log(this.produitForm.value);
      this.service.createDataProduit(this.produitForm.value).subscribe((res) => {
        console.log(res, "res ==>");
        this.produitForm.reset();
        this.successmsg = res.message;
      })
    } else {
      this.errormsg = 'all fields is required !!';
    }
  }

  produitUpdate() {
    console.log(this.produitForm.value, 'updatedform');
    if (this.produitForm.valid) {
      this.service.updateDataProduit(this.getparamid, this.produitForm.value).subscribe((res) => {
        console.log(res, "res ==>");
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'All fields are required';
    }
  }
}
