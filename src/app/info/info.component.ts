import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id : string;

  info = [{
    id: "1",
    name: "info1"
  }, {
    id: "2",
    name: "info2"
  }, {
    id: "3",
    name: "info3"
  }]
  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  routeToEdit(id){
    this.router.navigate(["/info", id , "edit"],{relativeTo : this.activatedRoute});
  }

}
