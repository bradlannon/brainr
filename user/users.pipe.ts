import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {
 transform(value: User[], filterBy: string): User[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((user: User) =>
        user.userid.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 
     //   user.vessel.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     //   user.role.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 
        ) : value; 
    }
}

function MyString(val) {
    if (arguments.length === 0) {
        return "";
    } else if (typeof val === "undefined") {
        return "undefined";
    } else if (val === null) {
        return "null";
    } else if (typeof val === "boolean") {
        return val ? "true" : "false";
    } else if (typeof val === "number") {
        // super complex rules
    } else if (typeof val === "string") {
        return val;
    } else {
        // return MyString(ToPrimitive(val, prefer string))
    }
}


