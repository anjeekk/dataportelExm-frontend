import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistraionService {

  constructor(private http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:9090/login",user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:9090/registeruser",user)
  }

  
}
