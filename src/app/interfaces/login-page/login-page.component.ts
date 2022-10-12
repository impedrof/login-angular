import { AuthenticationUseCase } from './../../application/use_case/authentication.use_case';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private useCase: AuthenticationUseCase) {}

  ngOnInit(): void {}

  async signIn() {
    if (!this.loginForm.valid) return;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    await this.useCase.signIn(email ?? '', password ?? '');
  }
}
