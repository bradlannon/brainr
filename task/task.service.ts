import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: FirebaseListObservable<any[]>;
  task: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.tasks = this.af.database.list('/tasks') as FirebaseListObservable<Task[]>
  }

  getTasks(){
    return this.tasks;
  }

  getTaskDetails(id){
    this.task = this.af.database.object('/tasks/'+id) as FirebaseObjectObservable<Task>
    return this.task;
  }

  addTask(task){
   
    // Create root ref
   /* let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        task.image = selectedFile.name;
        task.path = path;
        return this.tasks.push(task);
      });
    }

    */
    return this.tasks.push(task);
  }

  updateTask(id, task){
    return this.tasks.update(id, task);
  }

  deleteTask(id){
    return this.tasks.remove(id);
  }

}



