import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <section>
      <div class="bgImg">
        <div></div>
      </div>
      <div class="heading">
        <h1>Ooops page not found</h1>
        <button (click)="backToHome()">Back to Home Page</button>
      </div>
    </section>
  `,
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backToHome() {
    this.router.navigate(['']);
  }
}
