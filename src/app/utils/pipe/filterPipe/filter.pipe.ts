import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    return args.flatMap((arg: any) => {
      return value.filter(function (data: any) {
        return data.category.toLowerCase() === arg.toLowerCase();
      });

    }).sort((a: { id: number; }, b: { id: number; }) => {
      return a.id - b.id;
    })

  }

}
