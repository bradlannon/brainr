import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  state: boolean = false;

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.state = true;
      }
      else 
      {
        this.state = false;
      }
    });

  }
  title = 'app works!';



  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }




}
