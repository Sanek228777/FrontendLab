import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private mockUser = { email: 'admin@test.com', password: '123456' };

  constructor(private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    if (email === this.mockUser.email && password === this.mockUser.password) {
      const fakeJwt = 'FAKE_JWT_TOKEN_' + Date.now();
      localStorage.setItem(this.TOKEN_KEY, fakeJwt);
      return of(true);
    }
    return of(false);
  }

  register(email: string, password: string): Observable<boolean> {
    this.mockUser = { email, password };
    return of(true);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
