import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymGuard } from '../guards';
import { NotFoundComponent } from '../pages';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
