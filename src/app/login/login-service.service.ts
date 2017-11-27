import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginServiceService {

  constructor(
    private http: Http,
    private router:Router
  ) { }
  
  login(email,password): Observable<any>{
    console.log(email,password);    
    return this.http.get(      
      `http://localhost:8080/userLogin?email=${email}&password=${password}`);      
  }
}
