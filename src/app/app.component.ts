import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthService } from './shared/services/auth.service';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Otolane Web Client';
  clock = Observable.interval(1000);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    console.log('App running...');
  }

  ngOnInit() {
    this.clock.subscribe(value => {
      const tick = value;

    });
  }

  /**
   * Is the user logged in?
   */
  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  /**
   * Log the user out
   */
  logout() {
    this.authService.logout()
    .subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
