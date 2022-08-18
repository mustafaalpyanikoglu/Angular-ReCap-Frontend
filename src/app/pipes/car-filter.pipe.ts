import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {
  transform(value: CarDetailDto[], filterCarModelName:string): CarDetailDto[] {
    filterCarModelName = filterCarModelName?filterCarModelName.toLocaleLowerCase():"";
    return filterCarModelName?value.filter((c:CarDetailDto)=>c.modelName.toLocaleLowerCase().indexOf(filterCarModelName)!==-1):value
  }
}
