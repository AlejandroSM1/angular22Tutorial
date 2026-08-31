import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {

  studentName: string = "Juanito Manzanas";

  rollNo: number = 121;

  isStudenActive: boolean = false;

  currentDate: Date = new Date();

  teacherName = "Raul";

  cityList: string[] = ["Irapuato", "León", "Salamanca", "Celaya"];

  rollNoList: number[] = [121, 122, 123];

  student = {
    studentName: "Ram",
    rollNo: 121,
    city: "Irapuato"
  }

  studentList = [
    { studentName: "Juan", rollNo: 121, city: "Irapuato" },
    { studentName: "Pedro", rollNo: 122, city: "León" },
    { studentName: "Luisa", rollNo: 123, city: "Salamanca" }
  ]

  employee: any = "No utilizar any, es una excelente practica en Angular"

  constructor(){

    // debugger;
    console.log(this.studentList);
    console.log(this.studentList[2]);
    console.log(this.studentName);

    this.studentName = "Alejandro SM";
    this.employee = true;
    this.employee = 123;
    this.employee = [];

    console.log("Despues del cambio de valor: " + this.studentName)
  }

}
