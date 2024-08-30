import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/loginModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let user: LoginModel = Object.assign({}, this.loginForm.value);

      this.auth.login(user).subscribe({
        next: (response) => {
          this.toastr.success('You have successfully logged in.');
          localStorage.setItem('token', response.data.token);
        },
        error: (response) => this.toastr.error(response.error.message),
      });
    } else {
      this.toastr.error(
        'Please make sure that all input fields are filled in correctly.'
      );
    }
  }
}
