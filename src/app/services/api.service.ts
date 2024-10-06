import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model'; // Asegúrate de que la ruta sea correcta

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

  login(loginData: { phoneNumber: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/Auth/login`, loginData);
  }
}
