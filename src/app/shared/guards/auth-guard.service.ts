import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.tokenNotExpired()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild() {
    if (this.authService.tokenNotExpired()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
