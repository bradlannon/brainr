import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer/computer';
import { Contact } from '../contact/contact';
import { HowTo } from '../howto/howto';
import { Task } from '../task/task';
import { User } from '../user/user';

import { ComputerService } from '../computer/computer.service';
import { ContactService } from '../contact/contact.service';
import { HowToService } from '../howto/howto.service';
import { TaskService } from '../task/task.service';
import { UserService } from '../user/user.service';

import { ComputerFilterPipe } from '../computer/computer.pipe';
import { ContactFilterPipe } from '../contact/contact.pipe';
import { HowToFilterPipe } from '../howto/howto.pipe';
import { TaskFilterPipe } from '../task/task.pipe';
import { UserFilterPipe } from '../user/users.pipe';

import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'app-brainr',
  templateUrl: './brainr.component.html',
  styleUrls: ['./brainr.component.css']
})
export class BrainrComponent implements OnInit {

  constructor(private computerService:ComputerService,
              private contactService:ContactService,
              private howtoService:HowToService,
              private taskService:TaskService,
              private userService:UserService
  ) {
    
  }


  showContacts:boolean = true;
  showComputers:boolean = true;
  showHowTos:boolean = true;
  showTasks:boolean = true;
  showUsers:boolean = true;

  computerFilter: string;
  contactFilter:string;
  howtoFilter:string;
  taskFilter:string;
  userFilter:string;

  computers: any;
  contacts: any;
  howtos: any;
  tasks: any;
  users: any;

  //notes: FirebaseListObservable<Note[]>;

  ngOnInit() {
  this.computerService.getComputers().subscribe(computers => {
      // console.log(JSON.stringify({ data: computers}, null, 4)); 
      this.computers = computers;
    });

    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });

    this.howtoService.getHowTos().subscribe(howtos => {
      this.howtos = howtos;
    });

    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      // console.log(JSON.stringify({ data: tasks}, null, 4)); 
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
