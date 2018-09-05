import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id;
  userid;
  password;
  role;
  vessel;
  

  constructor(
    private firebaseService:UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getUserDetails(this.id).subscribe(user => {
      this.userid = user.userid;
      this.password = user.password;
      this.role = user.role;
      this.vessel = user.vessel;
    });
  }

  onEditSubmit(){
    let user = {
        userid: this.userid,
        password: this.password,
        role: this.role,
        vessel: this.vessel,
    }

    this.firebaseService.updateUser(this.id, user);

    this.router.navigate(['/users']);
  }

}
