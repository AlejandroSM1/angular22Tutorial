import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  
  employeeModel = signal({
    empName: '',
    empCity: '',
    empState: ''
  });

  employeeForm = form(this.employeeModel, (schema) => {
    required(schema.empName, {message: 'Employee name is required'}),
    required(schema.empCity, {message: 'Employee city is required'}),
    required(schema.empState, {message: 'Employee state is required'}),
    minLength(schema.empName, 3, {message: 'Employee name must be at least 3 characters long'})
  });

  onSaveEmp(){
    const formValue = this.employeeForm().value();
  }
}
