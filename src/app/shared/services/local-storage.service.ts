import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {}

  /**
   * Get item by name
   */
  getItemByName(name: string) {
    return localStorage.getItem(name) || '';
  }

  /**
   * Set item by name
   */
  setItemByName(name: string, value: any) {
    localStorage.setItem(name, value);
    return this;
  }

  /**
   * Get auth0
   */
  getStoredAuth() {
    const auth = {
      token: this.getItemByName('auth_token') || null,
      expiredDate: this.getItemByName('token_expired') || null,
      userId: this.getItemByName('userId') || null
    };
    return auth;
  }

  /**
   * Set auth0
   */
  storeAuth(auth) {
    this.destroyAuth();
    if (auth.token) this.setItemByName('auth_token', auth.token);
    if (auth.expiredDate > 0) this.setItemByName('token_expired', auth.expiredDate);
    if (auth.userId) this.setItemByName('userId', auth.userId);
    return this;
  }

  /**
   * Remove auth0
   */
  destroyAuth() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('token_expired');
    localStorage.removeItem('userId');
    return this;
  }

}
