import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './posts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsService {

  private postsUrl = 'api/posts';
  constructor(private http: HttpClient) { }


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
    .pipe(
      tap(heroes => console.log(`fetched heroes`, heroes)),
      catchError(this.handleError('getHeroes', []))
    );
  }
  
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ =>  console.log(`fetched user id=${id}`)),
      catchError(this.handleError<Post>(`getUser id=${id}`))
    );
  }


  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions).pipe(
      tap((post: Post) => console.log(`added post`, post)),
      catchError(this.handleError<Post>('addUser'))
    );
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, httpOptions).pipe(
      tap(_ => console.log(`updated user id=${post.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }
    
  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post: post.id;
    const url = `${this.postsUrl}/${id}`;
  
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deleteUser'))
    );
  }  
//===================================================================================================
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
   // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }  
}