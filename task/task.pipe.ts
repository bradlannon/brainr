

import { Pipe, PipeTransform } from '@angular/core';
import {Task} from './task';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
 transform(value: Task[], filterBy: string): Task[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((task: Task) =>
        task.title.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        task.location.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        task.description.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 
        ) : value;
        
    }
    

}