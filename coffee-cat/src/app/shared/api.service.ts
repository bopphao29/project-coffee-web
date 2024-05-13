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

    valueToken : string
    constructor(
        private httpClient: HttpClient
    ) { }

    private token: string;
    url = 'http://localhost:5678/api/v1'
    
    login(username: string, password: string):Observable<any> {
        const userFor = { username: username, password: password }
        console.log(userFor)
        const a =  this.httpClient.post(this.url + '/auth/sign-in', userFor, {observe: 'response'})
        const b = a.subscribe({
            next : res => {
                console.log(res['body']['data']['token'])
                this.valueToken = res['body']['data']['token']
            }
        })
        console.log(b)
         return a
    }

    getListProduct(pageIndex: number, pageSize: number){
        // const token = localStorage.getItem('currentUser')
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        const  body = {pageIndex, pageSize };
        // return this.httpClient.post(this.url + '/products' + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {headers: headers})
        return this.httpClient.post(this.url + '/products', body, {headers : headers})
    }

    getListCategory(pageIndex: number, pageSize: number){
        // const token = localStorage.getItem('currentUser')
        // const gettoken = JSON.parse(token);
        // const usetoken = gettoken['user_token'];
        // console.log(gettoken['token'])
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        // console.log(this.token)
        const  body = {pageIndex, pageSize };
        // return this.httpClient.post(this.url + '/products' + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {headers: headers})
        return this.httpClient.post(this.url + '/categories', body, {headers : headers})
    }

    createCategory(name : string, description: string){
        const useFor = {name: name, description: description}
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        return this.httpClient.post(this.url + '/categories/create', useFor, {headers : headers})
    }
    

}
