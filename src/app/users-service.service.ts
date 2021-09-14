import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Injectable, Output } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  activeNos = ["Ann", "John"];
  inactiveNos = ["Tom", "George"];

  constructor(private counterService: CounterService) { }

  setToActive(id: any){
    this.activeNos.push(this.inactiveNos[id]);
    this.inactiveNos.splice(id,1);
    this.counterService.incrementInactiveToActive();
  }

  setToInActive(id: any){
    this.inactiveNos.push(this.activeNos[id]);
    this.activeNos.splice(id,1);
    this.counterService.incrementActiveToInactive();
  }
}
