import { Pipe, PipeTransform } from '@angular/core';
import { Temperatura } from '../models/temperatura';

@Pipe({
  name: 'convertir'
})
export class ConvertirPipe implements PipeTransform {

  transform(temperatura: Temperatura, args: string): string {
    console.log(temperatura);
    return temperatura.valor.toString() + ' ' + args;
  }

}
