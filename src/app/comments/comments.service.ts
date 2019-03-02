import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from './comment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentsService {
  private commentsUrl = 'api/comments';  
  
  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl)
    .pipe(
      tap(heroes => console.log(`fetched comments`)),
      //catchError(this.handleError('getHeroes', []))
    );
  }

  getComment(id: number): Observable<Comment> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.get<Comment>(url).pipe(
      tap(_ => console.log(`fetched comment id=${id}`)),
     // catchError(this.handleError<Comment>(`getUser id=${id}`))
    );
  }  
  
  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment, httpOptions).pipe(
      tap((comment: Comment) => console.log(`added hero w/ id=${comment.id}, postid=${comment.postid}, user=${comment.user}`)),
      //catchError(this.handleError<Post>('addUser'))
    );
  }  
  
  deleteComment(comment: Comment | number): Observable<Comment> {
    const id = typeof comment === 'number' ? comment: comment.id;
    const url = `${this.commentsUrl}/${id}`;
  
    return this.http.delete<Comment>(url, httpOptions).pipe(
      tap(_ =>  console.log(`deleted comment id=${id}`)),
     // catchError(this.handleError<Comment>('deleteUser'))
    );
  }
    

}
