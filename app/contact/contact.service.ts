import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Contact } from './contact';

@Injectable()
export class ContactService {
  contacts: FirebaseListObservable<any[]>;
  contact: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.contacts = this.af.database.list('/contacts') as FirebaseListObservable<Contact[]>
  }

  getContacts(){
    return this.contacts;
  }

  getContactDetails(id){
    this.contact = this.af.database.object('/contacts/'+id) as FirebaseObjectObservable<Contact>
    return this.contact;
  }

  addContact(contact){
    // Create root ref
   /* let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        contact.image = selectedFile.name;
        contact.path = path;
        return this.contacts.push(contact);
      });
    }
    */
    return this.contacts.push(contact);
  }

  updateContact(id, contact){
    return this.contacts.update(id, contact);
  }

  deleteContact(id){
    return this.contacts.remove(id);
  }

}




