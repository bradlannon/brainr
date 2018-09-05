import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id:any;
  user: any;
  imageUrl:any;

  constructor(
    private firebaseService: UserService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getUserDetails(this.id).subscribe(user => {
      this.user = user;
/*
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.user.path);
      storageRef.child(this.user.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
*/
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteUser(this.id);

    this.router.navigate(['/users']);
  }

}
