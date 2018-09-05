import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
    title:any;
    description:any;
    location:any;
    dateDue:any;
    dateCreated:any;
    importance:any;

  //  mdDatepickerToggle:boolean;
   // mdDatepicker:boolean;

  constructor(
    private firebaseService:TaskService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let task = {
        title: this.title,
        description: this.description,
        location: this.location,
        dateDue: this.dateDue,
        dateCreated: this.dateCreated,
        importance: this.importance
    }

    this.firebaseService.addTask(task);
    this.router.navigate(['tasks']);
  }
}
