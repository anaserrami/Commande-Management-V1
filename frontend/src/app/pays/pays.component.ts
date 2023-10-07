import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  constructor(private service:ApiserviceService) {}
  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllDataPays();
  }

  deletePaysID(id:any){
    console.log(id, 'delete ==>');
    this.service.deleteDataPays(id).subscribe((res) => {
      console.log(res, 'delete ==>');
      this.successmsg = res.message;
      this.getAllDataPays();
    })
  }

  getAllDataPays(){
    this.service.getAllDataPays().subscribe((res) => {
      console.log(res, "res ==>");
      this.readData = res.data;
    });
  }
}