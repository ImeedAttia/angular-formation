import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: any,limit? :any):any {
    if(!value) return null;

    if(!limit) limit = 30;
    return value.substr(0,limit) + '...';
  }

}
