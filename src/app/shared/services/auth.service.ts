import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';
import { LocalStorageService } from './local-storage.service';
import { options } from './headers';

@Injectable()
export class AuthService {
  private authUrl: string = '';
  private loggedIn: boolean = false;

  constructor(
    private configService: ConfigService,
    private localStorageService: LocalStorageService,
    private http: Http
  ) {

    //Init auth0
    this.authUrl = configService.getUrls().authUrl;

    // look at localStorage to check if the user is logged in
    this.loggedIn = !!this.getToken();
  }

  /**
   * Get token
   */
  getToken() {
    const auth: any = this.localStorageService.getStoredAuth();
    return auth.token;
  }

  attachToken() {
    // attaching a token
    let token = this.getToken();
    if (!options.headers.has('Authorization')) {
      options.headers.append('Authorization', `${token}`);
    } else {
      options.headers.set('Authorization', `${token}`);
    }
    return options;
  }

  /**
   * Get has expired date of token
   */
  getIsExpiredToken() {
    const auth: any = this.localStorageService.getStoredAuth();
    return (new Date().valueOf() > new Date(auth.expiredDate).valueOf());
  }

  /**
   * Check if the user is logged in
   */
  isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * Check if the token is expired
   */
  tokenNotExpired() {
    return this.isLoggedIn() && !this.getIsExpiredToken();
  }

  /**
   * Log the user in
   */
  login(email: string, password: string): Observable<string> {
    return this.http.post(`${this.authUrl}/login`,
      {
        email,
        password,
        include: 'user'
      }, options)
      .map(res => res.json())
      .do(res => {
        if (res.id) {
          this.localStorageService.storeAuth({
            token: res.id,
            userId: res.userId,
            expiredDate: new Date(new Date(res.created).valueOf() + res.ttl * 1000).valueOf()
          });
          this.loggedIn = true;
        }
      })
      .catch(this.handleError);
  }

  /**
   * Log the user out
   */
  logout(): Observable<string> {
    return this.http.get(`${this.authUrl}/logout`, options)
      .map(res => {
        return res.json();
      })
      .do(res => {
        this.localStorageService.destroyAuth();
        this.loggedIn = false;
      })
      .catch(this.handleError);
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
