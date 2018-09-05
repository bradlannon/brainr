import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brainrFilter'
})
export class BrainrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
