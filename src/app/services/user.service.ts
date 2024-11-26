import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserList } from '../models/User';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ApiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  GetUsers(): Observable<UserList[]> {
    return this.http.get<UserList[]>(this.ApiUrl);
  };
}


/*
  Observable - Uma versão melhor de uma promise
*/
