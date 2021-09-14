import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCount = 0;
  InactiveTOActiveCount = 0 ;

  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactiveCount++;
    console.log("Active to Inactive Count :",this.activeToInactiveCount) ;
  }

  incrementInactiveToActive(){
    this.InactiveTOActiveCount++;
    console.log("Inactive to Active Count :",this.InactiveTOActiveCount) ;
  }

}
