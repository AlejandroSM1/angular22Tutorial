import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tem-form',
  imports: [FormsModule],
  templateUrl: './tem-form.html',
  styleUrl: './tem-form.css',
})
export class TemForm {

  companyObj: any = {
    companyId: 0,
    companyName: "",
    pinCode: "",
    address: "",
    phone: ""
  }

  onSaveCompany(fromRef: NgForm ){
    if(fromRef.invalid){
      alert("Falta información por capturar");
    }else{
      alert("¿Desea guardar la información?");
      const formValue = this.companyObj;
    }
  }
}