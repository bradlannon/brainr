import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Computer } from './computer';

@Injectable()
export class ComputerService {
  computers: FirebaseListObservable<any[]>;
  computer: FirebaseObjectObservable<any>;
  //folder: any;

  constructor(private af: AngularFire) {
   // this.folder = 'computerimages';
    this.computers = this.af.database.list('/computers') as FirebaseListObservable<Computer[]>
  }

  getComputers(){
    return this.computers;
  }

  getComputerDetails(id){
    this.computer = this.af.database.object('/computers/'+id) as FirebaseObjectObservable<Computer>
 
    return this.computer;
  }

  addComputer(computer){
    // Create root ref
    console.log("Attempting to save");
    /*let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        computer.image = selectedFile.name;
        computer.path = path; */
        return this.computers.push(computer);
  //    });
  
  }

  updateComputer(id, computer){
    return this.computers.update(id, computer);
  }

  deleteComputer(id){
    return this.computers.remove(id);
  }

}




