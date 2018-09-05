import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { User } from './user';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  user: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
   // this.folder = 'userimages';
    this.users = this.af.database.list('/users') as FirebaseListObservable<User[]>
  }

  getUsers(){
    return this.users;
  }

  getUserDetails(id){
    this.user = this.af.database.object('/users/'+id) as FirebaseObjectObservable<User>
    return this.user;
  }

  addUser(user){
    // Create root ref
  /*  let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        user.image = selectedFile.name;
        user.path = path;
        return this.users.push(user);
      });
    }  */


    return this.users.push(user);
  }

  updateUser(id, user){
    return this.users.update(id, user);
  }

  deleteUser(id){
    return this.users.remove(id);
  }

}
