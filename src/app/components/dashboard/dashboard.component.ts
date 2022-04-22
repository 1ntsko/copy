import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  role = Roles;

  roleNumber = JSON.parse(this.authService.currentUser.displayName).entityNo;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
