import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginCredentials, RegisterCredentials, User } from '../../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http = inject(HttpClient)

  currentUser = signal<User | null>(null)

  baseApiUrl = 'http://localhost:5068/api/'

  register(credentials: RegisterCredentials) {
    return this.http.post<User>(this.baseApiUrl + 'account/register', credentials).pipe(
      tap(user => {
        if (user) {
          this.setCurrentUser(user)
        }
      })
    )
  }

  login(credentials: LoginCredentials) {
    return this.http.post<User>(this.baseApiUrl + 'account/login', credentials).pipe(
      tap(user => {
        if (user) {
          this.setCurrentUser(user)
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('user')
    this.currentUser.set(null);
  }

  private setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
    this.currentUser.set(user)
  }

}
