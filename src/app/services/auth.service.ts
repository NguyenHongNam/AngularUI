import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService}from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "https://localhost:7041/api/User/"
  private userPayload:any;
  constructor(private http:HttpClient,private router:Router) { 
    this.userPayload = this.decodeToken();
  }

  signUp(user:any){
    return this.http.post<any>(`${this.baseUrl}Register`,user);
  }

  login(login:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,login);
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token);
  }

  getUsernameFromToken(){
    if(this.userPayload)
    return this.userPayload.UserName;
  }

  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.Role;
  }
}
