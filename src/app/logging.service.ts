import { Injectable } from '@angular/core';
import { InjectableEgServiceService } from './injectable-eg-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private injectableService: InjectableEgServiceService) { }

  logStatusChanged(status: String){
    console.log("Status of the method is : ", status);
    this.injectableService.logInjectabelServiceChanged();
  }
}
