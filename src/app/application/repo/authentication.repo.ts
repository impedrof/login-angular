import { User } from 'src/app/domain/user';

export abstract class AuthenticationRepo {
  public abstract signIn(email: string, password: string): Promise<User>;
  public abstract signUp(email: string, password: string): Promise<User>;
  public abstract signOut(): void;
  public abstract isLoggedIn(): boolean;
}
