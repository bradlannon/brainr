import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
    id;
    description;
    location;
    title;
    dateDue;
    dateCreated;
    importance;

  constructor(
    private firebaseService:TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getTaskDetails(this.id).subscribe(task => {
      this.title = task.title;
      this.description = task.description;
      this.location = task.location;
      this.dateDue = task.dateDue;
      this.dateCreated = task.dateCreated;
      this.importance = task.importance;
    });
  }

  onEditSubmit(){
    let task = {
        title: this.title,
        description: this.description,
        location: this.location,
        dateDue: this.dateDue,
        dateCreated: this.dateCreated,
        importance: this.importance
    }

    this.firebaseService.updateTask(this.id, task);

    this.router.navigate(['/tasks']);
  }

}
