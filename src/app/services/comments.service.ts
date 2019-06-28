import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PaginatedComments } from '../models/comment';

@Injectable ({providedIn: 'root'})
export class CommentService{
    private commentsSubject: BehaviorSubject<Comment[]>;
    public comments: Comment[];


    constructor(private http: HttpClient){
        this.commentsSubject = new BehaviorSubject<Comment[]>([]);
    }

    getAllComments(){
        return this.http.get<Comment[]>('https://localhost:44307/api/comments')    
        .pipe(map(respone => {
                this.comments = respone;
                this.commentsSubject.next(this.comments);
                return respone.entries;
            }))
    }
    getAllFilteredComments(filter): Observable<any>{
        const url = `${`https://localhost:44307/api/comments?filter=`}${filter}`;
            return this.http.get<any>(url, filter);
      }
}