import { Pipe, PipeTransform } from '@angular/core';
import { companyInterface } from '../interfaces/companyInterface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: companyInterface[], name: string): companyInterface[] {
    if(!value || name === ''){
      return value
    }
    const filtered:companyInterface[]=[]
    for (let company of value){
      if(company.name.toLowerCase().includes(name.toLowerCase())){
        filtered.push(company)
      }
    }
    return filtered
  }

}