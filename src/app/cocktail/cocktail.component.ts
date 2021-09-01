import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  @Output() server = new EventEmitter();

  constructor() { }

  ngOnInit() {
   
  }

  decoratorEmitFunction(event){
    console.log(event.target.value);
    this.server.emit(JSON.stringify(event.target.value));
  }

}
