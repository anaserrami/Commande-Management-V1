import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  constructor(private service:ApiserviceService) {}
  readData:any;
  successmsg:any;
  ngOnInit(): void {
    this.getAllDataRole();
  }

  deleteRoleID(id:any){
    console.log(id, 'delete ==>');
    this.service.deleteDataRole(id).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataRole();
    })
  }

  getAllDataRole(){
    this.service.getAllDataRole().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;
    });
  }
}
