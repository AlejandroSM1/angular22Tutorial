import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-crud',
  imports: [FormsModule],
  templateUrl: './client-crud.html',
  styleUrl: './client-crud.css',
})
export class ClientCRUD {

  clientList: WritableSignal<any[]> = signal([]);
  newClientObj: any = {
    clientId: 0,
    clientName: '',
    businessName: '',
    contactPerson: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    createdDate: new Date(),
    logo: ''
  }

  http = inject(HttpClient);

  constructor() {
    this.getAllClients();
  }

  getAllClients() {
    this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients').subscribe({
      next:(response: any) => {
        this.clientList.set(response.data);
      }
    });
  }

  onSaveClient() {
    this.http.post('https://api.freeprojectapi.com/api/SmartParking/AddClient', this.newClientObj).subscribe({
      next:(response: any) => {
        if(response.result) {
          alert('Client added successfully');
          this.getAllClients();
        }
        else {
          alert(response.message);
        }
      }
    });
  }

  onEditClient(data: any) {
    this.newClientObj = data;
  }

  onUpdateClient() {
    this.http.post('https://api.freeprojectapi.com/api/SmartParking/UpdateClient', this.newClientObj).subscribe({
      next:(response: any) => {
        if(response.result) {
          alert('Client updated successfully');
          this.getAllClients();
        }
        else {
          alert(response.message);
        }
      }
    });
  }

  onDeleteClient(clientId: number) {
    if(confirm('Are you sure you want to delete this client?')) {
      this.http.post('https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=' + clientId, {}).subscribe({
        next:(response: any) => {
          if(response.result) {
            alert('Client deleted successfully');
            this.getAllClients();
          }
          else {
            alert(response.message);
          }
        }
      });
    }
  }

}
