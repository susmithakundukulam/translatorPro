import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-page',
  templateUrl: './bottom-page.component.html',
  styleUrls: ['./bottom-page.component.css']
})
export class BottomPageComponent implements OnInit {

  @Input() profile = {fName:"", lName:""};
  
  constructor() { }

  ngOnInit() {
  }

}
