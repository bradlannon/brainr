import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { HowTo } from './howto';

@Injectable()
export class HowToService {
  howtos: FirebaseListObservable<any[]>;
  howto: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.folder = 'howtoimages';
    this.howtos = this.af.database.list('/howtos') as FirebaseListObservable<HowTo[]>
  }

  getHowTos(){
    return this.howtos;
  }

  getHowToDetails(id){
    this.howto = this.af.database.object('/howtos/'+id) as FirebaseObjectObservable<HowTo>
    return this.howto;
  }

  addHowTo(howto){
    // Create root ref
  /*  let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        howto.image = selectedFile.name;
        howto.path = path;
        return this.howtos.push(howto);
      });

      
    }
    */

    return this.howtos.push(howto);
  }

  updateHowTo(id, howto){
    return this.howtos.update(id, howto);
  }

  deleteHowTo(id){
    return this.howtos.remove(id);
  }

}

