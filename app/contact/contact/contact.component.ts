import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id:any;
  contact: any;
 
  constructor(
    private firebaseService: ContactService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getContactDetails(this.id).subscribe(contact => {
      this.contact = contact;
/*
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.contact.path);
      storageRef.child(this.contact.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });

    });
    */
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteContact(this.id);

    this.router.navigate(['/contacts']);
  }

}
