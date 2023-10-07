import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private service:ApiserviceService) {}
  readData:any;
  successmsg:any;
  ngOnInit(): void {
    this.getAllDataUser();
  }

  deleteUserID(id:any){
    console.log(id, 'delete ==>');
    this.service.deleteDataUser(id).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataUser();
    })
  }

  getAllDataUser(){
    this.service.getAllDataUser().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;

      // Fetch the role for each user
      this.readData.forEach((user: any) => {
        this.service.getSingleDataRole(user.idRole).subscribe((roleRes) => {
          console.log(roleRes, 'roleRes ==>');
          user.role = roleRes.data[0];
        });
      });

      // Fetch the country for each user
      this.readData.forEach((user: any) => {
        this.service.getSingleDataPays(user.idPays).subscribe((paysRes) => {
          console.log(paysRes, 'paysRes ==>');
          user.pays = paysRes.data[0];
        });
      });
    });
  }
}
