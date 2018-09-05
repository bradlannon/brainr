import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {
    
    transform(value: Contact[], filterBy: string): Contact[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((contact: Contact) =>
        contact.firstName.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        contact.lastName.toString().toLocaleLowerCase().indexOf(filterBy) !== -1  || 
        contact.phone.toString().toLocaleLowerCase().indexOf(filterBy) !== -1  ||
        contact.info.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 
        ) : value;
    }
}

