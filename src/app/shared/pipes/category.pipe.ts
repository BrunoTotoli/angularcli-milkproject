import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value){
      case 'MANHA' : return 'sunny';
      case 'TARDE' : return 'bedtime'
    }
    return 'code';
  }

}
