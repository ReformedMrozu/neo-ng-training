import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate',
  pure: true
})
export class ShortDatePipe implements PipeTransform {
  transform(date: Date | null): string | null {
    return date.getDate() + '.' + (1 + date.getMonth()) + '.' + date.getFullYear();
  }
}
