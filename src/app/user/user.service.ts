import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
 
  private usersUrl = 'api/users';  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(users => console.log(`fetched users`)),
      catchError(this.handleError('getUsers', []))
    );
  }
  
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
/** PUT: update the hero on the server */
updateUser (user: User): Observable<any> {
  return this.http.put(this.usersUrl, user, httpOptions).pipe(
    tap(_ => console.log(`updated user id=${user.id}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}

/** POST: add a new hero to the server */
addUser (user: User): Observable<User> {
  return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
    tap((user: User) => console.log(`added user w/ id=${user.id}`)),
    catchError(this.handleError<User>('addUser'))
  );
}

/** DELETE: delete the hero from the server */
deleteUser (user: User | number): Observable<User> {
  const id = typeof user === 'number' ? user: user.id;
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<User>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted user id=${id}`)),
    catchError(this.handleError<User>('deleteUser'))
  );
}

//===================================================================================================
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  
}
