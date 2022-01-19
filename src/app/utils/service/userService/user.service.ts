import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  flag = false;
  userType: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  validateUser(user: any) {
    if (user.userName.toUpperCase() === user.password.toUpperCase()) {
      if (user.userName.toUpperCase() === 'ADMIN') {
        return 'admin';
      } else {
        return 'customer';
      }
    }
    return false;
  }

  getUserType(): string {
    var user = '';
    this.userType.subscribe((data: string) => {
      user = data;
    });
    return user;
  }
}
