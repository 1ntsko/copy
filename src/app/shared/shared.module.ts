import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NbCardModule,
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
} from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RequestCardComponent } from './components/request-card/request-card.component';

@NgModule({
  declarations: [RequestCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbCardModule,
    NbButtonModule,
    FontAwesomeModule,
    NbSidebarModule,
    NbLayoutModule,
  ],
  exports: [RequestCardComponent],
})
export class SharedModule {}
