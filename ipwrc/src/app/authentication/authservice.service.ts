import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './user';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private httpClient: HttpClient) { }
  
  login(user: user) {
    return this.httpClient.post('user/login', user)
      .pipe(tap(
        (response: any) => {
          this.saveAuthentication(response.token)
        }
      ))
  }

  signup(user: user) {
    return this.httpClient.post('user/signup', user)
      .pipe(tap(
        (response: any) => {
          this.saveAuthentication(response.token)
        }
      ))
  }

  check() {
    return this.httpClient.get('user/check')
  }

  saveAuthentication(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    try {
      const token = localStorage.getItem('token') as string
      if(!token) return ''
      return token
    } catch (_) {
      return ''
    }
  }

  signOut() {
    localStorage.removeItem('token')
  }
}
