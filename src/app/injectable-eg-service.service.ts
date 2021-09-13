import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectableEgServiceService {

  @Output() tempStatus = new EventEmitter<String>();
  
  constructor() { }

  logInjectabelServiceChanged(){
    console.log("logInjectabelServiceChanged ");
  }
  
}
