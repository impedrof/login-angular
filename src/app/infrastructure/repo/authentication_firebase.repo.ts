import { User } from './../../domain/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthenticationRepo } from './../../application/repo/authentication.repo';

@Injectable()
export class AuthenticationFirebaseRepo implements AuthenticationRepo {
  constructor(private router: Router, private fireAuth: AngularFireAuth) {}

  async signIn(email: string, password: string): Promise<User> {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        return new User(
          result.user?.uid ?? '',
          result.user?.email ?? '',
          result.user?.displayName ?? '',
          result.user?.photoURL ?? '',
          result.user?.emailVerified ?? false
        );
      })
      .catch((error) => {
        throw Error();
      });
  }

  signUp(email: string, password: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  signOut(): void {
    throw new Error('Method not implemented.');
  }

  isLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
}
