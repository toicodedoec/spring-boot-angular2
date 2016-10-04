import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <nav class="container">
        <a routerLink="/artists/43ZHCT0cAZBISjO8DG9PnE">Album List</a>
        <a routerLink="/about">About</a>
      </nav>
      <router-outlet></router-outlet>
      `
})
export class AppComponent {
  title = "Simple CRUD Angular2 App";
}
