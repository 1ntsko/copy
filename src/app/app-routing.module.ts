import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent, MainComponent, NotFoundComponent } from './pages';
import {
  DashboardComponent,
  SearchComponent,
  UpcomingConsultationsComponent,
  HealthRecordsComponent,
  BookingComponent,
  ConsultaitonRequestsComponent,
  PatientsComponent,
} from './components';
import { Roles } from './models/user.model';
import { AnonymGuard, AuthGuard, PermissionGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [AnonymGuard],
    component: HomepageComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'search',
        canActivate: [PermissionGuard],
        data: {
          role: Roles.Patient,
        },
        component: SearchComponent,
      },
      {
        path: 'upcoming-consultations',
        component: UpcomingConsultationsComponent,
      },
      {
        path: 'health-records',
        canActivate: [PermissionGuard],
        data: {
          role: Roles.Patient,
        },
        component: HealthRecordsComponent,
      },
      {
        path: 'booking/:id',
        canActivate: [PermissionGuard],
        data: {
          role: Roles.Patient,
        },
        component: BookingComponent,
      },
      {
        path: 'consultation-requests',
        canActivate: [PermissionGuard],
        data: {
          role: Roles.Doctor,
        },
        component: ConsultaitonRequestsComponent,
      },
      {
        path: 'patients',
        canActivate: [PermissionGuard],
        data: {
          role: Roles.Doctor,
        },
        component: PatientsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
