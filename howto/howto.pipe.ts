import { Pipe, PipeTransform } from '@angular/core';
import { HowTo } from './howto';


@Pipe({
  name: 'howtoFilter'
})

export class HowToFilterPipe implements PipeTransform {    
    transform(value: HowTo[], filterBy: string): HowTo[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((howto: HowTo) =>
        howto.title.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        howto.location.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        howto.description.toString().toLocaleLowerCase().indexOf(filterBy) !== -1
        ) : value;
        
    }
    

}


