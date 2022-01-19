import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/utils/service/userService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    const user = this.userService.validateUser(form.value);

    if (user)
      this.setUserAndNavigate(user);
    else
      alert('Enter Valid UserName and Password');
  }

  setUserAndNavigate(user: string) {
    this.userService.userType.next(user);
    this.router.navigate(['/' + user]);
  }

}
