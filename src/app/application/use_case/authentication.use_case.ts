import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationRepo } from '../repo/authentication.repo';

@Injectable()
export class AuthenticationUseCase {
  constructor(private auth: AuthenticationRepo, private router: Router) {}

  async signIn(email: string, password: string): Promise<void> {
    try {
      await this.auth.signIn(email, password);
      this.router.navigate(['/main']);
    } catch (ex) {
      console.log(ex);
    }
  }
}
