import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, ProfileComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, LoginRoutingModule],
})
export class LoginModule {}
