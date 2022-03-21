import { Injectable } from '@angular/core';
import { User } from '../_models/model_collector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: User;
  firstName!: string;

  constructor() { }

  isLoggedIn() {
    const user: User = JSON.parse(localStorage.getItem('user')!);

    if (user) {
      if (user.token === 'logged') {
        return true
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getUserFirstName() {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user) {
      this.firstName = this.user.firstName;
    }
  }
}