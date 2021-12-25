import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-routing-poc';

  activeLinkIndex = -1;
  navLinks: { label: string; link: string; index: number; }[];

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: './',
        index: 0
      }, {
        label: 'Users',
        link: './users',
        index: 1
      }, {
        label: 'Servers',
        link: './servers',
        index: 2
      },
    ];
  }
}
