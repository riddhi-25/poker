import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginSuccess {
  token: string;
}

export interface User {
  self: string;
  key: string;
  name: string;
  emailAddress: string;
  avatarUrls: Record<AvatarSize, string>;
  displayName: string;
  active: boolean;
  deleted: boolean;
  timeZone: string;
  locale: string;
  groups: any;
  applicationRoles: any;
  expand: string;
}

export type AvatarSize = '16x16' | '24x24' | '32x32' | '48x48';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  successToken!: LoginSuccess;

  constructor(private http: HttpClient) {}

  loginUser(
    username: string | null | undefined,
    password: string | null | undefined
  ): Observable<LoginSuccess> {
    return this.http
      .post<LoginSuccess>('http://localhost:3000/api/auth', {
        username,
        password,
      })
      .pipe(
        tap((res: any) => {
          const token = res.token;
          this.successToken = res.token;
          localStorage.setItem('token', token);
        })
      );
  }

  getUser(): Observable<User> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Basic ${token}`);
    return this.http.get<User>('http://localhost:3000/api/auth/currentUser', {
      headers,
    });
  }

  get loginSuccessToken(): LoginSuccess {
    return this.successToken;
  }
}
