import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userid:any;
  password:any;
  role:any;
  vessel:any;
 

  constructor(
    private firebaseService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let user = {
      userid: this.userid,
      password: this.password,
      role: this.role,
      vessel:this.vessel
    }

    this.firebaseService.addUser(user);

    this.router.navigate(['users']);
  }

}
