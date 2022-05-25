import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './views/profile/profile.component';
import { LoginRoutingModule } from './login-routing.module';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SignInComponent } from './views/sign-in/sign-in.component';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, ProfileComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, LoginRoutingModule],
})
export class LoginModule {}
