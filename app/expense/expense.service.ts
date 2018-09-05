import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Expense } from './expense';

@Injectable()
export class ExpenseService {
  expenses: FirebaseListObservable<any[]>;
  expense: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
   // this.folder = 'expenseimages';
    this.expenses = this.af.database.list('/expenses') as FirebaseListObservable<Expense[]>
  }

  getExpenses(){
    return this.expenses;
  }

  getExpenseDetails(id){
    this.expense = this.af.database.object('/expenses/'+id) as FirebaseObjectObservable<Expense>
    return this.expense;
  }

  addExpense(expense){
    // Create root ref
  /*  let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        expense.image = selectedFile.name;
        expense.path = path;
        return this.expenses.push(expense);
      });
    }  */

    return this.expenses.push(expense);
  }


  updateExpense(id, expense){
    return this.expenses.update(id, expense);
  }

  deleteExpense(id){
    return this.expenses.remove(id);
  }

}




