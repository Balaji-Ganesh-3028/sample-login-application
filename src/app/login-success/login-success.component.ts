import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss'],
})
export class LoginSuccessComponent {
  username: string = 'User'; // YOU CAN SET THIS DYNAMICALLY BASED ON YOUR LOGIN LOGIC

  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/login']);
  }
}
