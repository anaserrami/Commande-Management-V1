import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {
  constructor(private service: ApiserviceService, private router: ActivatedRoute) { }

  errormsg: any;
  successmsg: any;
  getparamid: any;
  admins: any[] = []; // Store the list of admins

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid) {
      this.service.getSingleDataFournisseur(this.getparamid).subscribe((res) => {
        console.log(res, 'res ==>');
        this.fournisseurForm.patchValue({
          idUser: res.data[0].idUser,
          nom: res.data[0].nom,
          email: res.data[0].email,
          tele: res.data[0].tele,
          description: res.data[0].description
        });
      });
    }

    // Fetch the list of admins
    this.service.getUserByRole('Admin').subscribe((res) => {
      this.admins = res.data;
    });
  }

  fournisseurForm = new FormGroup({
    idUser: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tele: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  fournisseurSubmit() {
    if (this.fournisseurForm.valid) {
      console.log(this.fournisseurForm.value);
      this.service.createDataFournisseur(this.fournisseurForm.value).subscribe((res) => {
        console.log(res, 'res ==>');
        this.fournisseurForm.reset();
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'all fields are required!';
    }
  }

  fournisseurUpdate() {
    console.log(this.fournisseurForm.value, 'updatedform');
    if (this.fournisseurForm.valid) {
      this.service.updateDataFournisseur(this.getparamid, this.fournisseurForm.value).subscribe((res) => {
        console.log(res, 'res ==>');
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'All fields are required';
    }
  }
}
