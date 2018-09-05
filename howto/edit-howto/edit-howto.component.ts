import { Component, OnInit } from '@angular/core';
import {HowToService} from '../howto.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-howto',
  templateUrl: './edit-howto.component.html',
  styleUrls: ['./edit-howto.component.css']
})
export class EditHowToComponent implements OnInit {
  id;
  title;
  description;
  location;
 
  constructor(
    private firebaseService:HowToService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getHowToDetails(this.id).subscribe(howto => {
      this.title = howto.title;
      this.description = howto.description;
      this.location = howto.location;
    });
  }

  onEditSubmit(){
    let howto = {
        title: this.title,
        description: this.description,
        location: this.location
    }

    this.firebaseService.updateHowTo(this.id, howto);

    this.router.navigate(['/howtos']);
  }

}
