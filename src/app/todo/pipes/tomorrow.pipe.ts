import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tomorrow',
  pure: true
})
export class TomorrowPipe implements PipeTransform {
  transform(date: Date | null): Date | null {
    date.setDate(date.getDate() + 1);
    return date;
  }
}
