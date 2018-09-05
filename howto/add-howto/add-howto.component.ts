import { Component, OnInit } from '@angular/core';
import {HowToService} from '../howto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-howto',
  templateUrl: './add-howto.component.html',
  styleUrls: ['./add-howto.component.css']
})
export class AddHowToComponent implements OnInit {
  title:any;
  description:any;
  location:any;
 

  constructor(
    private firebaseService:HowToService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let howto = {
      title: this.title,
      description: this.description,
      location: this.location
    }

    this.firebaseService.addHowTo(howto);

    this.router.navigate(['howtos']);
  }

}
