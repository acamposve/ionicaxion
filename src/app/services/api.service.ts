import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://amontefusco-002-site1.ktempurl.com/api';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categorias`);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos`);
  }

  login(loginData: { phoneNumber: string; password: string }): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/Auth/login`, loginData, {
      responseType: 'text' as 'json' // Asegúrate de que la respuesta sea tratada como texto
    });
  }
}
