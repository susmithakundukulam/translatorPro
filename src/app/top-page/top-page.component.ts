import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<{fName:string, lName:string}>();

  fName='firstName';
  lName='lastName'
  constructor() { }

  ngOnInit() {
  }

  addNewItem(){
   this.newItemEvent.emit({fName: this.fName, lName: this.lName});
  }

}
