import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
 title = "YoYo";
 status: string = "Active";
 allowNewTitle:boolean = false;
 titleCreationStatus:string = "No Title was created";
 TitleName = "";
 Title_2wayBinding = "";
 titleCreated = false;
 pageStatus ="off";
 titles = ["Title1", "Title2"];

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{this.allowNewTitle = true },2000);
    this.pageStatus = Math.random() > 0.5 ? "on" : "off";
  }

  getActiveStatus(){
    return this.status; 
  }

  onCreatetitle(){
    this.titleCreated = true;
    this.titleCreationStatus = "Title was already created : "+this.Title_2wayBinding;
    this.titles.push(this.Title_2wayBinding);
  }

  onUpdateTitle(event: Event){
    // console.log(event);
    this.TitleName =(<HTMLInputElement>event.target).value;
    console.log(this.TitleName);

    //or do the same method
    // onUpdateTitle(event: Event){
    //   this.TitleName =event.target.value;
    //   console.log(this.TitleName);
    // }
  }

  getColor(){
    return this.pageStatus === "on" ? "green":"red";
  }

  onRemoveTitle(id: any){
    const position = id;
    this.titles.splice(position, 1);
  }
}
