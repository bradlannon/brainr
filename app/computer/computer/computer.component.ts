import { Component, OnInit } from '@angular/core';
import {ComputerService} from '../computer.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  id:any;
  computer: any;
  //imageUrl:any;

  constructor(
    private firebaseService: ComputerService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getComputerDetails(this.id).subscribe(computer => {
      this.computer = computer;

     // let storageRef = firebase.storage().ref();
    //  let spaceRef = storageRef.child(this.computer.path);
    //  storageRef.child(this.computer.path).getDownloadURL().then((url) => {
        // Set image url
     //   this.imageUrl = url;
     // }).catch((error) => {
     //   console.log(error);
     // });

    });
  }

  onDeleteClick(){
    this.firebaseService.deleteComputer(this.id);

    this.router.navigate(['/computers']);
  }

}
