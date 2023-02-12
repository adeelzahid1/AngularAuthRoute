import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken !== null;
  }

  lotout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({email, password}: any):Observable<any>{
    if(email == "adeel@admin.com" && password == "3322"){
      this.setToken('ssfakldjflasldfjlasjdkflajslkdfjls');
      return of({name: 'Adeel', email:'adeel@admin.com'});
    }
    return throwError(new Error('Failed to Login'));
  }


}
