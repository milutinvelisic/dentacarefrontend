import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(value: string){
    if (value.length > 150){
      return value.substr(0, 150) + '... READ MORE';
    }
    return value;
  }

}
