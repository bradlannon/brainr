import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expense.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  id:any;
  expense: any;
  imageUrl:any;

  constructor(
    private firebaseService: ExpenseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getExpenseDetails(this.id).subscribe(expense => {
      this.expense = expense;
/*
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.expense.path);
      storageRef.child(this.expense.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });*/

    });
  }

  onDeleteClick(){
    this.firebaseService.deleteExpense(this.id);

    this.router.navigate(['/expenses']);
  }

}
