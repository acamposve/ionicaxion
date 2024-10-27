// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  PhoneNumber: string;
  Password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://amontefusco-002-site1.ktempurl.com/api/Auth/login';

  constructor(private http: HttpClient) {}
  private userName: string | null = null;

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string | null {
    return this.userName;
  }

  
  login(request: LoginRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, request, { headers });
  }
}
