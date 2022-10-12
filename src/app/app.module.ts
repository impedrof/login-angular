import { AuthenticationUseCase } from './application/use_case/authentication.use_case';
import { AuthenticationFirebaseRepo } from './infrastructure/repo/authentication_firebase.repo';
import { AuthenticationRepo } from './application/repo/authentication.repo';
import { NgModule } from '@angular/core';
import { FirebaseModule } from './firebase.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './interfaces/app.component';
import { AppRoutingModule } from './application/config/app-routing/app-routing.module';
import { LoginPageComponent } from './interfaces/login-page/login-page.component';
import { MainPageComponent } from './interfaces/main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: AuthenticationRepo, useClass: AuthenticationFirebaseRepo },
    AuthenticationUseCase,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
