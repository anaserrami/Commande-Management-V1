import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private service:ApiserviceService, private router:ActivatedRoute) {}
  
  errormsg:any;
  successmsg:any;
  getparamid:any;
  roles: any[] = []; // Store the list of country

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid) {
      this.service.getSingleDataUser(this.getparamid).subscribe((res) => {
        console.log(res, 'res ==>');
        const roleId = res.data[0]?.idRole;
        const roleName = roleId === 1 ? 'Admin' : roleId === 2 ? 'Client' : '';
        
        if (roleName) {
          this.userForm.patchValue({
            idRole: res.data[0].idRole,
            nom: res.data[0].nom,
            tele: res.data[0].tele,
            email: res.data[0].email,
            password: res.data[0].password
          });
        } else {
          this.errormsg = 'Invalid role assigned to user';
        }
      });
    }
    
    // Fetch the list of roles
    this.service.getAllDataRole().subscribe((res) => {
      this.roles = res.data;
    });
  }  

  userForm = new FormGroup({
    idRole: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    tele: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.createDataUser(this.userForm.value).subscribe((res) => {
        console.log(res, "res ==>");
        this.userForm.reset();
        this.successmsg = res.message;
      })
    } else {
      this.errormsg = 'all fields is required !!';
    }
  }  

  userUpdate() {
    console.log(this.userForm.value, 'updatedform');
    if (this.userForm.valid) {
      this.service.updateDataUser(this.getparamid, this.userForm.value).subscribe((res) => {
        console.log(res, "res ==>");
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'All fields are required';
    }
  }
}
