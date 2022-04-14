import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbr'
})
export class AbbrPipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split(' ');
    let abbr = '';

    words.forEach(work => {
      abbr += work.charAt(0);
    })

    return abbr.toUpperCase();
  }

}
