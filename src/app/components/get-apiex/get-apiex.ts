import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-get-apiex',
  imports: [],
  templateUrl: './get-apiex.html',
  styleUrl: './get-apiex.css',
})
export class GetAPIex {

  http = inject(HttpClient);

  userList: WritableSignal<any[]> = signal([]);
  photoList: WritableSignal<any[]> = signal([]);
  vendorList: WritableSignal<any[]> = signal([]);

  constructor() {
    this.getAllUSers();
    this.getPhotos();
    this.getAllVendors();
  }

  getAllUSers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
        next:(data:any) => {
          this.userList.set(data);
      },
        error:(erro:any) => {
        console.log(erro);
      }
    })
  }

  getPhotos(){
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next:(resp:any) => {
        this.photoList.set(resp);
      },
      error:(error:any) => {
        console.log(error);
      }
    })
  }

  getAllVendors(){
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetBusVendors').subscribe({
      next:(resp:any) => {
        this.vendorList.set(resp);
      },
      error:(error:any) => {
        console.log(error);
      }
    })
  }

}