import { Component, OnInit } from '@angular/core';
import {ComputerService} from '../computer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
   computerName: any;
   userid: any;
   password: any;
   ipaddress: any;
   vessel: any;
   comments: any;
   vncpassword: any;
   software: any;
   selectedValue: string;

  constructor(
    private firebaseService:ComputerService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let computer = {
      computerName: this.computerName,
      userid: this.userid,
      password: this.password,
      ipaddress:this.ipaddress,
      vessel: this.vessel,
      comments: this.comments,
      vncpassword: this.vncpassword,
      software:this.software
    }

    this.firebaseService.addComputer(computer);

    this.router.navigate(['computers']);
  }

}
