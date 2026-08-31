import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  productName: string = "Laptop";

  productPrice = 1200;

  maxAllowedChar = 5;

  myDynamicType = 'checkbox';

  isProductActive = true;

  showWelcomeText() {
    alert("Bienvenido al desarrollo con Angular 22");
  }

  onDropDownChange() {
    alert("Cambio el valor del dropdown");
  }

  onMouseEnter() {
    console.log("El puntero entro al div.")
  }

  onMouseLeave() {
    console.log("El puntero salio del div.")
  }
}
