import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:any;
  listFilter: string;
  
  constructor(private firebaseService:ContactService) { }

  ngOnInit() {
    this.firebaseService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

}
