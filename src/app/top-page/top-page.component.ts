import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit, AfterContentInit {

  @Output() newItemEvent = new EventEmitter<{fName:string, lName:string}>();
  @ViewChild('first_name',{static: true}) first_localname:ElementRef;
  @ContentChild('content',{static:true}) content_Para: ElementRef;

  fName='firstName';
  lName='lastName'
  constructor() { }

  ngOnInit() {
  }

  addNewItem(){
   this.newItemEvent.emit({fName: this.fName, lName: this.lName});
  }

  addNewItemusingLocal(){
    console.log(this.first_localname.nativeElement.value);
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    console.log(this.content_Para.nativeElement.textContent);
  }

}
