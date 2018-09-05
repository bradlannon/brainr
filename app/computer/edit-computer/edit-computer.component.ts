import { Component, OnInit } from '@angular/core';
import {ComputerService} from '../computer.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  id;
  computerName: string;
    userid: string;
    password: string;
    ipaddress: string;
    vessel: string;
    comments: string;
    vncpassword: string;
    software: string;
    selectedValue: string;
    
  constructor(
    private firebaseService:ComputerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getComputerDetails(this.id).subscribe(computer => {
      this.computerName = computer.computerName;
      this.userid = computer.userid;
      this.password = computer.password;
      this.ipaddress = computer.ipadress;
      this.vessel = computer.vessel;
      this.comments = computer.comments;
      this.vncpassword = computer.vncpassword;
      this.software = computer.software;
    });
  }

  onEditSubmit(){
    let computer = {
        computerName: this.computerName,
        userid: this.userid,
        password: this.password,
        ipaddress: this.ipaddress,
        vessel: this.vessel,
        comments:this.comments,
        vncpassword:this.vncpassword,
        software:this.software
    }

    this.firebaseService.updateComputer(this.id, computer);

    this.router.navigate(['/computers']);
  }

}
