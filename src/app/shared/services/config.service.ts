import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {
  private readonly CHAT_URL: string = 'ws://localhost:3000/chat';
  private readonly apiUrl: string = 'http://localhost:3020/api/v2.0';
  private readonly authUrl: string = `${this.apiUrl}/users`;
  private readonly usersUrl: string = `${this.apiUrl}/Accounts/Users`;
  private readonly accountsUrl: string = `${this.apiUrl}/Accounts`;
  private readonly accountServicesUrl: string = `${this.apiUrl}/Accounts/services`;
  private readonly vehiclesUrl: string = `${this.apiUrl}/Vehicles`;
  private readonly auctionsUrl: string = `${this.apiUrl}/Auctions`;
  private readonly bidsUrl: string = `${this.apiUrl}/Bids`;

  private readonly socketWS = 'ws://0.0.0.0:3020/socket.io';
  private readonly socketWS_Chat = 'ws://localhost:3010';

  constructor(private http: Http) {}

  /**
   * Get application API-config
   */
  getUrls() {
    return {
      apiUrl: this.apiUrl,
      authUrl: this.authUrl,
      cms: {
        usersUrl: this.usersUrl,
        accountsUrl: this.accountsUrl
      },
      data: {
        vehiclesUrl: this.vehiclesUrl,
        auctionsUrl: this.auctionsUrl,
        bidsUrl: this.bidsUrl
      },
      socketWS: this.socketWS,
      socketWS_Chat: this.socketWS_Chat
    };
  }

  /**
   * Handle any errors from the API
   */
  public handleError(err) {
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
