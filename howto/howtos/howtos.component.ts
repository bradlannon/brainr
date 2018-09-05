import { Component, OnInit } from '@angular/core';
import {HowToService} from '../howto.service';

@Component({
  selector: 'app-howtos',
  templateUrl: './howtos.component.html',
  styleUrls: ['./howtos.component.css']
})
export class HowTosComponent implements OnInit {
  howtos:any;
  listFilter: string;
  
  constructor(private firebaseService:HowToService) { }

  ngOnInit() {
    this.firebaseService.getHowTos().subscribe(howtos => {
      this.howtos = howtos;
    });
  }

}
