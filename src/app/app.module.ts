import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './interfaces/app.component';
import { AppRoutingModule } from './application/config/app-routing/app-routing.module';
import { LoginPageComponent } from './interfaces/login-page/login-page.component';
import { MainPageComponent } from './interfaces/main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
