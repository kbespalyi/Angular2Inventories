import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'dashboard-root',
  templateUrl: './custom-services.component.html',
  styleUrls: ['./custom-services.component.css']
})

export class CustomServicesComponent implements OnInit {

  title = 'Welcome to the Dashboard';

  users: User[];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users
      );
  }

}
