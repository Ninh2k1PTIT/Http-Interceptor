import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceComponent {
  constructor(private _http: HttpClient) {}

  getData(): any {
    return this._http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  demo404error() {
    return this._http.get<any>(
      'https://jsonplaceholder.typicode.com/users/abcxyz'
    );
  }
}
