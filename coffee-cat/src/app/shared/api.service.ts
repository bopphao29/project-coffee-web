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
    // ngOnInit(){
    //    this.valueToken  = localStorage.getItem("Token")
    //    console.log(this.valueToken);
       
    // }
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
                console.log(res['body']['data']['token']);
                localStorage.setItem("Token", res['body']['data']['token'])
            }
        })
        console.log(b)
         return a
    }

    // a
    //product
    getListProduct(pageIndex: number, pageSize: number){
        this.valueToken = localStorage.getItem("Token")

        // const token = localStorage.getItem('currentUser')
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        const  body = {pageIndex, pageSize };
        // return this.httpClient.post(this.url + '/products' + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {headers: headers})
        return this.httpClient.post(this.url + '/products', body, {headers : headers})
    }
    getDetail(pageIndex: number, pageSize: number,id){
        this.valueToken = localStorage.getItem("Token")
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        const  body = {pageIndex, pageSize, id };
        // return this.httpClient.post(this.url + '/products' + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {headers: headers})
        return this.httpClient.post(this.url + '/products/detail', body, {headers : headers})
    }
    createProduct(name: string, categoryId: string, price: string, discount: string, description: string, imageUrl:string){
        this.valueToken = localStorage.getItem("Token")

        const useFor = {name: name, categoryId: categoryId, price: price, discount: discount, description: description, imageUrl: imageUrl}
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        return this.httpClient.post(this.url + '/products/create', useFor,  {headers : headers})
    }
    update(body){
        this.valueToken = localStorage.getItem("Token")
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        return this.httpClient.post(this.url + '/products/update', body,  {headers : headers})
    }
    deleteProduct(id){
        this.valueToken = localStorage.getItem("Token")

        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        return this.httpClient.post(this.url + '/products/delete', {id}, {headers : headers})
    }

    //category
    getDetailCategories(pageIndex: number, pageSize: number,id){
        this.valueToken = localStorage.getItem("Token")
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        const  body = {pageIndex, pageSize, id };
        // return this.httpClient.post(this.url + '/products' + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {headers: headers})
        return this.httpClient.post(this.url + '/categories/detail', body, {headers : headers})
    }

    getListCategory(pageIndex: number, pageSize: number){
        this.valueToken = localStorage.getItem("Token")
        
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        const  body = {pageIndex, pageSize };
        // return this.httpClient.post(this.url + '/products' + `?pageIndex=${pageIndex}&pageSize=${pageSize}`, {headers: headers})
        return this.httpClient.post(this.url + '/categories', body, {headers : headers})
    }

    createCategory(name : string, description: string){
        this.valueToken = localStorage.getItem("Token")

        const useFor = {name: name, description: description}
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        return this.httpClient.post(this.url + '/categories/create', useFor, {headers : headers})
    }

    updateCate(body){
        this.valueToken = localStorage.getItem("Token")
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        return this.httpClient.post(this.url + '/categories/update', body,  {headers : headers})
    }
    
    deleteCategory(id){
        this.valueToken = localStorage.getItem("Token")

        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.valueToken })
        return this.httpClient.post(this.url + '/categories/delete', {id}, {headers : headers})
    }


    

}
