import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval: any;
  count = 0;
  @Output() messageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.interval = setInterval(()=>{
      this.messageEvent.emit(this.count +1);
      console.log(this.count);
      this.count++;
    },1000);
  }

  pauseGame(){
    clearInterval(this.interval);
  }
}
