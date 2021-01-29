import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassIdService {

  id : number;
  constructor() { }
  setId(id:number)
  {
    this.id = id;
  }
  getId()
  {
    return(this.id);
  }
}
