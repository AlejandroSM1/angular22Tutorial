import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../services/master';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isDivVisible: boolean =  true;
  isOffer = false;
  offerStatus = "new";
  cityList = ["Guanajuato", "León", "Silao", "Irapuato"]
  studentList = [
    {id: 1, name: "Alejandro Santoyo", city: "Irapuato", rollNo: 121},
    {id: 2, name: "Juan Peréz", city: "León", rollNo: 122},
    {id: 3, name: "Alejandra Pelagio", city: "Silao", rollNo: 123},
    {id: 4, name: "Carlos Pelagio", city: "Guanajuato", rollNo: 124}
  ]
  selectedStudentId = 0;

  masterService = inject(Master);

  orgininalCardNumber = "1234567890123456";

  formatedCardNumber : string = this.masterService.getFormatedCardNumber(this.orgininalCardNumber);

  toggleDiv1(){
    this.isDivVisible = !this.isDivVisible;
  }

  storeLoggedData() {
    this.masterService.loggedUser = "Alejandro Santoyo";
  }
}
