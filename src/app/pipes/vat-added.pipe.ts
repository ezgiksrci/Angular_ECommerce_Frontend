import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
})
export class VatAddedPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }
}

/* 
  transform(value: number, ...args: unknown[]): number 
  ..args => C# params
  ..args yerine kullanılmak istenen parametleri açık açık yazmak daha temiz bir görüntü.

  value => değiştirmek istenilen değer.

  :number => dönüş tipi 
*/
