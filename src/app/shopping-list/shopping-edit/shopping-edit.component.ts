import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:true}) nameInputElement: ElementRef;
  @ViewChild('amountInput',{static:true}) amountInputElement: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount:number}>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputElement.nativeElement.value;
    const ingAmount = this.amountInputElement.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
