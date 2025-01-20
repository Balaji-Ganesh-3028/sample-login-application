import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = {} as FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // YOUR FORM INITIALIZATION LOGIC GOES HERE
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log(this.loginForm.value);

      if (username === 'Admin' && password === 'Admin@123') {
        this.router.navigate(['/login-success']);
      } else {
        this.showErrorMessage('Invalid credentials');
      }
    } else {
      this.showErrorMessage('Please fill in the form');
    }
  }

  private showErrorMessage(message: string) {
    alert(message);
  }
}
