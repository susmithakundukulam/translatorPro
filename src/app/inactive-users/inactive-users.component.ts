import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  inActiveUsers=[];

  constructor(private userService : UsersServiceService) { }

  ngOnInit() {
    this.inActiveUsers = this.userService.inactiveNos;
  }

  setToActiveUsers(id : any){
    this.userService.setToActive(id);
  }

}
