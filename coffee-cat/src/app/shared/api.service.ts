import { Time } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map, filter,count, scan } from 'rxjs/operators';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
    providedIn: 'root'
})   
export class ApiService {

    constructor(
        private httpClient: HttpClient
    ) { }

    url = 'http://192.168.0.245:6789/api/v1'
    
    login(username: string, password: string) {
        const token = sessionStorage.getItem('access_token')
        const userFor = { username: username, password: password }
        const header = new HttpHeaders({ 'Authorization': 'Bearer ' + token })
        return this.httpClient.post(this.url + '/auth/sign-in', userFor, { headers: header })
    }

    getListProduct(pageIndex: number, pageSize: number){
        const token = sessionStorage.getItem('access_token')
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token })
        const  body = {pageIndex, pageSize };
        // return this.httpClient.post(this.url + '/products' + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {headers: headers})
        return this.httpClient.post(this.url + '/products', body, {headers : headers})
    }
    
}
