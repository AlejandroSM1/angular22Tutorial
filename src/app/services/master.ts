import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';

@Service()

export class Master {
    loggedUser: string = '';

    getFormatedCardNumber(cardNumber: string): string {
        const astriskData = "**** **** **** ";
        return astriskData + cardNumber.slice(-4);
    }

    http = inject(HttpClient);

    getAllClients() {
        return this.http.get('https://api.freeprojectapi.com/api/SmartParking/GetAllClients');
    }  
    
    saveClient(clientData: any) {
        return this.http.post('https://api.freeprojectapi.com/api/SmartParking/AddClient', clientData);
    }
}
