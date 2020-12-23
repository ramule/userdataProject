import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profiledata } from './profiledata';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url='http://localhost:3000/profiles';
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<profiledata[]>(this.url);
  }

  addProfile(profile: any): Observable<any> {

    return this.http.post<profiledata>(this.url, profile);
  }
}
