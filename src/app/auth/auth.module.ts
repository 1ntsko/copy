import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbRadioModule,
} from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    NbInputModule,
    NbLayoutModule,
    NbCardModule,
    FontAwesomeModule,
    NbIconModule,
    NbFormFieldModule,
    NbRadioModule,
    NbButtonModule,

    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
