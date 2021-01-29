import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
  name: 'tableFilter',  
  pure: false  
})  
export class TableFilterPipe implements PipeTransform {  
  
  transform(value: any, searchText: any): any {  
    return value.filter( function(search){
      return search.name.indexOf(searchText) > -1
    }
     )
 
  }  
} 