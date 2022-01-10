import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRs'
})
export class CurrencyPipe implements PipeTransform {

  transform(text: string): string {
    return text + ' <i class="fa fa-star" aria-hidden="true"></i>';
  }

}
