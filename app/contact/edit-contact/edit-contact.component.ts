import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id;
  firstName;
  lastName;
  phone;
  info;
 

  constructor(
    private firebaseService:ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getContactDetails(this.id).subscribe(contact => {
      this.firstName = contact.firstName;
      this.lastName = contact.lastName;
      this.phone = contact.phone;
      this.info = contact.info;
    
    });
  }

  onEditSubmit(){
    let contact = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        info: this.info
      
    }

    this.firebaseService.updateContact(this.id, contact);

    this.router.navigate(['/contacts']);
  }

}
