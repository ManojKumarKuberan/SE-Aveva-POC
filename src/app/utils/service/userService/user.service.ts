import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected baseApiUrl = environment.baseWebApiUrl;

  flag = false;
  userType: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(public http: HttpClient) { }

  userLogin(user: any) {
    const loginURL = this.baseApiUrl + 'auth/login';
    const defaultUser = { username: "mor_2314", password: "83r5^_" };

    this.http.post(loginURL, JSON.stringify(defaultUser));

    const response = { token: "eyJhbGciOiJIUzI1NiIsInR" }
    return response;
  }

  validateUser(user: any) {
    const response = this.userLogin(user);

    if (response.token && ((user.password.toUpperCase() === 'ADMIN') || (user.password.toUpperCase() === 'CUSTOMER'))) {
      if (user.password.toUpperCase() === 'ADMIN') {
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
