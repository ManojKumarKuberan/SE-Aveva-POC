import { Injectable } from '@angular/core';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  isAdmin(): boolean {
    if (this.userService.getUserType() === 'admin')
      return true;
    return false;
  }

  isCustomer(): boolean {
    if (this.userService.getUserType() === 'customer')
      return true;
    return false;
  }

}
