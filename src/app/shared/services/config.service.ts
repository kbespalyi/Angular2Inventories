import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {
  private readonly apiUrl: string = 'http://localhost:3020/api/v2.0';
  private readonly authUrl: string = `${this.apiUrl}/users`;
  private readonly usersUrl: string = `${this.apiUrl}/Accounts/Users`;

  private readonly socketWS = 'ws://localhost:3020';

  constructor(private http: Http) {}

  /**
   * Get application API-config
   */
  getUrls() {
    return {
      apiUrl: this.apiUrl,
      authUrl: this.authUrl,
      cms: {
        usersUrl: this.usersUrl
      },
      socketWS: this.socketWS
    };
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
