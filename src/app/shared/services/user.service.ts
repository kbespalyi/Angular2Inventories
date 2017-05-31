import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private usersUrl: string = '';

  // observable source
  private userCreatedSource = new Subject<User>();
  private userDeletedSource = new Subject();

  // observable stream
  userCreated$ = this.userCreatedSource.asObservable();
  userDeleted$ = this.userDeletedSource.asObservable();

  constructor(
    private configService: ConfigService,
    private authService: AuthService,
    private http: Http
  ) {
    //Init userApi
    this.usersUrl = configService.getUrls().cms.usersUrl;
  }

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    if (this.authService.isLoggedIn()) {
      return this.http.get(this.usersUrl, this.authService.attachToken())
        .map(res => res.json().users)
        .map(users => users.map(this.toUser))
        .catch(this.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Get a single user
   */
  getUser(id: string): Observable<User> {
    if (this.authService.isLoggedIn()) {
      return this.http.get(`${this.usersUrl}/${id}`, this.authService.attachToken())
        .map(res => res.json().data)
        .map(this.toUser)
        .catch(this.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Create the user
   */
  createUser(user: User): Observable<User> {
    if (this.authService.isLoggedIn()) {
      return this.http.post(this.usersUrl, { user }, this.authService.attachToken())
        .map(res => res.json())
        .do(user => this.userCreated(user))
        .catch(this.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Update the user
   */
  updateUser(user: User): Observable<User> {
    if (this.authService.isLoggedIn()) {
      return this.http.put(`${this.usersUrl}/${user.id}`, { user }, this.authService.attachToken())
        .map(res => res.json())
        .catch(this.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * Delete the user
   */
  deleteUser(id: string): Observable<any> {
    if (this.authService.isLoggedIn()) {
      return this.http.delete(`${this.usersUrl}/${id}`, this.authService.attachToken())
        .do(res => this.userDeleted())
        .catch(this.handleError);
    } else {
      return Observable.throw('Firstly you need to login');
    }
  }

  /**
   * The user was created. Add this info to our stream
   */
  userCreated(user: User) {
    this.userCreatedSource.next(user);
  }

  /**
   * The user was deleted. Add this info to our stream
   */
  userDeleted() {
    this.userDeletedSource.next();
  }

  /**
   * Convert user info from the API to our standard/format
   */
  private toUser(user): User {
    return new User(user);
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
