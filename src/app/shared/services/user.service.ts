import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user';
import { ConfigService } from './config.service';
import { contentHeaders } from './headers';

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
    private http: Http
  ) {
    //Init auth0
    this.usersUrl = configService.getUrls().cms.usersUrl;
  }

  attachToken() {
    // attaching a token
    let token   = localStorage.getItem('auth_token');
    const headers = contentHeaders;
    //headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `${token}`);
    return headers;
  }

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl, { headers: this.attachToken() })
      .map(res => res.json().users)
      .map(users => users.map(this.toUser))
      .catch(this.handleError);
  }

  /**
   * Get a single user
   */
  getUser(id: string): Observable<User> {
    return this.http.get(`${this.usersUrl}/${id}`, { headers: this.attachToken() })
      .map(res => res.json().data)
      .map(this.toUser)
      .catch(this.handleError);
  }

  /**
   * Create the user
   */
  createUser(user: User): Observable<User> {
    return this.http.post(this.usersUrl, { user }, { headers: this.attachToken() })
      .map(res => res.json())
      .do(user => this.userCreated(user))
      .catch(this.handleError);
  }

  /**
   * Update the user
   */
  updateUser(user: User): Observable<User> {
    return this.http.put(`${this.usersUrl}/${user.id}`, { user }, { headers: this.attachToken() })
      .map(res => res.json())
      .catch(this.handleError);
  }

  /**
   * Delete the user
   */
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.usersUrl}/${id}`, { headers: this.attachToken() })
      .do(res => this.userDeleted())
      .catch(this.handleError);
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
    return {
      id: user.id,
      accountId: user.accountId,
      firstName: user.firstName,
      lastName: user.lastName,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      level: user.level,
      status: user.status,
      language: user.language,
      avatar: user.image ? user.image.img : ''
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
