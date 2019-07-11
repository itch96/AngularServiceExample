import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const requestOptions: Object = {
      responseType: 'text'
    };
    return this.http.get<any>('http://localhost:3000/', requestOptions);
  }
}
