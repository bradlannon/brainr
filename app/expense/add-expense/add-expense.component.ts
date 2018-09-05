import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expense.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  title:any;
  date:any;
  travelTo:any;
  travelFrom:any;
  amount:any;
  vessel:any;

  selectedValue: string;
  
  constructor(
    private firebaseService:ExpenseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let expense = {
      title: this.title,
      date: this.date,
      travelTo: this.travelTo,
      travelFrom:this.travelFrom,
      amount: this.amount,
      vessel: this.vessel  
    }

    this.firebaseService.addExpense(expense);

    this.router.navigate(['expenses']);
  }

}
