import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  user: string | undefined;

  constructor(
    private sidebarService: NbSidebarService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.setUser();
  }

  setUser() {
    const user = this.authService.currentUser;
    // if (this.authService.currentUser) {
    const displayName = JSON.parse(this.authService.currentUser.displayName);
    this.user = `${displayName.firstName} ${displayName.lastName}`;
    // }
  }

  toggle() {
    this.sidebarService.toggle();
    return false;
  }

  signOut() {
    this.authService.SignOut().subscribe();
  }
}
