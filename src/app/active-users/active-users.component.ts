import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers=[];

  constructor(private userService : UsersServiceService) { }

  ngOnInit() {
    this.activeUsers = this.userService.activeNos;
  }

  setToInactiveUser(id : any){
    this.userService.setToInActive(id);
  }

}
