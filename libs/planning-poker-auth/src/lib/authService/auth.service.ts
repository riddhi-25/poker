import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { authResponse, User } from '../auth.model';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<authResponse> {
    const body = { username, password };
    return this.httpClient.post<authResponse>('http://localhost:3000/api/auth', body).pipe(
      tap((response: authResponse) => {
        const token = response.token;
        localStorage.setItem('token', token);
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getCurrentUser(): Observable<User> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const headers = new HttpHeaders({
      'Authorization': `Basic ${token}`,
    });
    return this.httpClient.get<User>('http://localhost:3000/api/auth/currentUser', { headers })
  }
  
  isLogged() {
    const token = localStorage.getItem('token');
    return token !== null;
  }
}
