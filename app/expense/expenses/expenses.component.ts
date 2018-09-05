import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses:any;
  listFilter: string;
  
  constructor(private firebaseService:ExpenseService) { }

  ngOnInit() {
    this.firebaseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
    });
  }

}
