import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private url = "http://localhost:8081/api/v1/users";
 
  constructor(private http: HttpClient) { }
 
  // Get users
  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
 
  // Add user
  addUser(user: any): Observable<any> {
    const addUserUrl = "http://localhost:8081/api/v1/addUser";
    return this.http.post(addUserUrl, user);
  }
}