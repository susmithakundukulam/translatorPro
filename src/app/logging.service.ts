import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChanged(status: String){
    console.log("Status of the method is : ", status);
  }
}
