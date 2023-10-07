import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrls: ['./add-pays.component.css']
})
export class AddPaysComponent implements OnInit {
  constructor(private service:ApiserviceService, private router:ActivatedRoute) {}
  
  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.service.getSingleDataPays(this.getparamid).subscribe((res) => {
        console.log(res, 'res ==>');
        this.paysForm.patchValue({
          nom: res.data[0].nom
        });
      });
    }
  }

  paysForm = new FormGroup({
    nom: new FormControl('', Validators.required)
  });

  paysSubmit() {
    if (this.paysForm.valid) {
      console.log(this.paysForm.value);
      this.service.createDataPays(this.paysForm.value).subscribe((res) => {
        console.log(res, "res ==>");
        this.paysForm.reset();
        this.successmsg = res.message;
      })
    } else {
      this.errormsg = 'all fields is required !!';
    }
  }

  paysUpdate() {
    console.log(this.paysForm.value, 'updatedform');
    if (this.paysForm.valid) {
      this.service.updateDataPays(this.getparamid, this.paysForm.value).subscribe((res) => {
        console.log(res, "res ==>");
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'All fields are required';
    }
  }
}