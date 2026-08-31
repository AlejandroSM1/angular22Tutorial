import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-directive-exp',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './directive-exp.html',
  styleUrl: './directive-exp.css',
})
export class DirectiveExp {

  divClassName: string = "bg-success";
  isCheckboxActive: boolean = false;
  mySentence = '';
  isTextValid = false;
  inputColorValue = '';
  divFigure: any = {};

  addDivClass(className: string){
    this.divClassName = className;
  }

  checkCharLength(){
    if(this.mySentence.length > 5)
      this.isTextValid = false;
    else
      this.isTextValid = true;
  }

  changeFigure(type: string){
    if (type == 'circle'){
      this.divFigure = {
        'background-color': 'red',
        height: '200px',
        width: '200px',
        'border-radius': '50%'
      }
    }else{
      this.divFigure = {
        'background-color': 'green',
        height: '200px',
        width: '200px'
      }
    }
  }

}
