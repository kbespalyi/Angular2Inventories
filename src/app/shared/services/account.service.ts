import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';

import { Account } from '../models/account';
import { Address } from '../models/address';

@Injectable()
export class AccountService {

  accountsUrl: string;

  // observable source
  private accountCreatedSource = new Subject<Account>();
  private accountDeletedSource = new Subject();

  // observable stream
  accountCreated$ = this.accountCreatedSource.asObservable();
  accountDeleted$ = this.accountDeletedSource.asObservable();

  constructor(
    private configService: ConfigService,
    private authService: AuthService,
    private http: Http
  ) {
    //Init accountApi
    this.accountsUrl = configService.getUrls().cms.accountsUrl;
  }

  getAccounts(): Observable<Account[]> {
    if (this.authService.isLoggedIn()) {
      return this.http.get(`${this.accountsUrl}/all`, this.authService.attachToken())
        .map(res => {
          console.log(res);
          return res.json().accounts;
        })
        .map(accounts => accounts.map(this.toAccount))
        .catch(this.configService.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Get a single account
   */
  getAccount(id: string): Observable<Account> {
    if (this.authService.isLoggedIn()) {
      return this.http.get(`${this.accountsUrl}/DealerProfile/accountId=${id}`, this.authService.attachToken())
        .map(res => res.json().data)
        .map(this.toAccount)
        .catch(this.configService.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Create the account
   */
  createAccount(account: Account): Observable<Account> {
    if (this.authService.isLoggedIn()) {
      return this.http.post(`${this.accountsUrl}/services`, { account }, this.authService.attachToken())
        .map(res => res.json())
        .do(user => this.accountCreated(user))
        .catch(this.configService.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Update the account
   */
  updateAccount(account: Account): Observable<Account> {
    if (this.authService.isLoggedIn()) {
      return this.http.put(`${this.accountsUrl}/services`, { account }, this.authService.attachToken())
        .map(res => res.json())
        .catch(this.configService.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Delete the account
   */
  deleteAccount(id: string): Observable<any> {
    if (this.authService.isLoggedIn()) {
      return this.http.delete(`${this.accountsUrl}/services`, this.authService.attachToken())
        .do(res => this.accountDeleted())
        .catch(this.configService.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * The account was created. Add this info to our stream
   */
  accountCreated(account: Account) {
    this.accountCreatedSource.next(account);
  }

  /**
   * The account was deleted. Add this info to our stream
   */
  accountDeleted() {
    this.accountDeletedSource.next();
  }

  /**
   * Convert account info from the API to our standard/format
   */
  private toAccount(account: any): Account {
    return new Account(account);
  }
  
}