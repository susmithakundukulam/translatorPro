import { Injectable } from '@angular/core';
import { logging } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor() { }

  isAuthenticated(){
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
    console.log("isAuthenticated :", promise);
    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false; 
  }

}