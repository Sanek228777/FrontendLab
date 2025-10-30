import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription',
  standalone: true
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(value: string, limit: number = 80): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
