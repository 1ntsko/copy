import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import {
  NbCardModule,
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
} from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbCardModule,
    NbButtonModule,
    FontAwesomeModule,
    NbSidebarModule,
    NbLayoutModule,
  ],
  exports: [HeaderComponent, SidebarComponent],
})
export class ShellModule {}
