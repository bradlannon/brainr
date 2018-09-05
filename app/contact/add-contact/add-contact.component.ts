import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  firstName:any;
  lastName:any;
  phone:any;
  info:any;
  

  constructor(
    private firebaseService:ContactService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      info:this.info
    }

    this.firebaseService.addContact(contact);

    this.router.navigate(['contacts']);
  }

}
