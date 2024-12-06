import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { luxousRoomList } from '../models/luxousRoom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LuxousRoomService {

  private ApiUrl = `${environment.ApiUrl}/luxousRoom`;

  constructor(private http: HttpClient) { }

  GetLuxousRoom(): Observable<luxousRoomList[]> {
    return this.http.get<luxousRoomList[]>(this.ApiUrl);
  };
}

