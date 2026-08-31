import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-basic',
  imports: [],
  templateUrl: './signal-basic.html',
  styleUrl: './signal-basic.css',
})
export class SignalBasic {
  employeeName: string = "Alejandro";
  empMobileNo = signal("4621239870");
  isActive: WritableSignal<boolean> = signal(false);
  cityListSignal: WritableSignal<string[]> = signal(["Leon", "Irapuato", "Silao"])

constructor(){
    setTimeout(() => {
    this.empMobileNo.set("0099009900")
  }, 2000);
}

  changeEmpName(){
    this.employeeName = "Fulanito";
  }

  changeMobileNo(){
    this.empMobileNo.set("1234567890");
  }
}
