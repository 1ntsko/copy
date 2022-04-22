import { DoctorDashboardComponent } from './components/dashboard/doctor-dashboard/doctor-dashboard.component';
import { base_Url } from './shared/utils/customTokens';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbCardModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ShellModule } from './shell/shell.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './auth/auth.module';
import { HomepageComponent, MainComponent } from './pages';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components';
import { PatientDashboardComponent } from './components/dashboard/patient-dashboard/patient-dashboard.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainComponent,
    DashboardComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    NbEvaIconsModule,

    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbThemeModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    ShellModule,
    AuthModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    {
      provide: base_Url,
      useValue: environment.BASE_URL,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
