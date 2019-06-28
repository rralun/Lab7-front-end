import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable ({providedIn: 'root'})
export class UserRoleService{
    
    public userroles: any;

    constructor(private http: HttpClient){
     
    }

    getAllUsersRoles(): Observable<any> {
            return this.http.get<any>(
                `https://localhost:44307/api/userroles`);
    
    }
}