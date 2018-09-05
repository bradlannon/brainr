import { PipeTransform, Pipe } from '@angular/core';
import { Computer } from './computer';

@Pipe({
    name: 'computerFilter'
})
export class ComputerFilterPipe implements PipeTransform {
    
    transform(value: Computer[], filterBy: string): Computer[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((computer: Computer) =>
        computer.computerName.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 
      //  computer.ipaddress.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     //   computer.vessel.toString().toLocaleLowerCase().indexOf(filterBy) !== -1
        ) : value;
        
    }
    
    
}

