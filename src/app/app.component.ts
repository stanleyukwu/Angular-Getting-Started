import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<nav class="navbar navbar-light navber-expand bg-light">
      <a class="navbar-brand">{{ PageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/welcome">Home</a></li>
        <li><a class="nav-link" routerLink="/products">Product List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div> `,
})
export class AppComponent {
  PageTitle: string = 'ACME PRoduct management';
}
