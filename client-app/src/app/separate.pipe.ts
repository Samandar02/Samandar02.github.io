import { Pipe, PipeTransform } from '@angular/core';
import { SelectorData } from './models';

@Pipe({
  name: 'separate'
})
export class SeparatePipe implements PipeTransform {

  transform(value: SelectorData[], type:string): SelectorData[] {
    value.forEach(item=>{
      if(item.key == type)
        item.isActive = true;
        else
        item.isActive = false;
    })
    return value;
  }
  shuffle(array:any[]) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
