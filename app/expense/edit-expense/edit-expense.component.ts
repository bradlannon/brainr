import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../expense.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  id;
  date;
  travelTo;
  travelFrom;
  title;
  amount;
  vessel;
  
  constructor(
    private firebaseService:ExpenseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getExpenseDetails(this.id).subscribe(expense => {
      this.date = expense.date;
      this.travelTo = expense.travelTo;
      this.travelFrom = expense.travelFrom;
      this.title = expense.title;
      this.amount = expense.amount;
      this.vessel = expense.vessel;
    
    });
  }

  onEditSubmit(){
    let expense = {
        date: this.date,
        travelTo: this.travelTo,
        travelFrom: this.travelFrom,
        title: this.title,
        amount: this.amount,
        vessel: this.vessel
      
    }

    this.firebaseService.updateExpense(this.id, expense);

    this.router.navigate(['/expenses']);
  }

}
