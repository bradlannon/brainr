import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  id:any;
  task: any;
  imageUrl:any;

  constructor(
    private firebaseService: TaskService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getTaskDetails(this.id).subscribe(task => {
      this.task = task;

     /* let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.task.path);
      storageRef.child(this.task.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
*/
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteTask(this.id);

    this.router.navigate(['/tasks']);
  }

}
