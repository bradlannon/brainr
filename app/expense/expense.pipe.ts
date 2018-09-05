import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from './expense';

@Pipe({
  name: 'expenseFilter'
})
export class ExpenseFilterPipe implements PipeTransform {
    
    transform(value: Expense[], filterBy: string): Expense[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((expense: Expense) =>
        expense.title.toString().toLocaleLowerCase().indexOf(filterBy) !== -1  ||
        expense.vessel.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 
        ) : value;
        
    }
    
}

