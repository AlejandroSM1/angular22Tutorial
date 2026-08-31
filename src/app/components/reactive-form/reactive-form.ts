import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl("",[Validators.required, Validators.minLength(4)]),
    emailId: new FormControl("", [Validators.required, Validators.email]),
    fullName: new FormControl(""),
    password: new FormControl("")
  });

  formBuilder = inject(FormBuilder);

  studentForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.studentForm = this.formBuilder.group({
      studId: [0],
      studName: ["", [Validators.required, Validators.minLength(4)]],
      city: [""]
    })
  }

  onSaveCustomer(){
    if(this.userForm.invalid){
      alert("Ingresa la información necesaria")
    }else{
      confirm("¿Deseas guardar la información capturada?")
      const formValue = this.userForm.value;
    }
    
  }

}
