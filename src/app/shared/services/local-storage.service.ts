import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {}

  /**
   * Get item by name
   */
  getItemByName(name: string) {
    return !!localStorage.getItem(name);
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
      token: localStorage.getItem('auth_token') || null,
      expired: localStorage.getItem('token_expired') || null,
      userId: localStorage.getItem('userId') || null
    };
    return auth;
  }

  /**
   * Set auth0
   */
  storeAuth(auth) {
    this.destroyAuth();
    if (auth.token) localStorage.setItem('auth_token', auth.token);
    if (auth.expired > 0) localStorage.setItem('token_expired', auth.expired);
    if (auth.userId) localStorage.setItem('userId', auth.userId);
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
