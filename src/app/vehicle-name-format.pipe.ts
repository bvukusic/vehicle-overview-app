import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleNameFormat'
})
export class VehicleNameFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.split(' ## ')[0];
  }
}
