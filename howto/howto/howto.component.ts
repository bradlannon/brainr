import { Component, OnInit } from '@angular/core';
import {HowToService} from '../howto.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css']
})
export class HowToComponent implements OnInit {
  id:any;
  howto: any;
  imageUrl:any;

  constructor(
    private firebaseService: HowToService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getHowToDetails(this.id).subscribe(howto => {
      this.howto = howto;
/*
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.howto.path);
      storageRef.child(this.howto.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
     //   console.log(error);
      });
*/
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteHowTo(this.id);

    this.router.navigate(['/howtos']);
  }

}
