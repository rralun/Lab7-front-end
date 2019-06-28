import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/users';


@Injectable({ providedIn: 'root' })
export class UserService {
  private usersSubject: BehaviorSubject<User[]>;
  public users: User[];

  constructor(private http: HttpClient) {
    this.usersSubject = new BehaviorSubject<User[]>([]);
  }

  getAllUsers() {


    return this.http.get<User[]>(`https://localhost:44307/api/users`)
      .pipe(map(response => {
        this.users = response;
        this.usersSubject.next(this.users);
        return response;
      }));
  }
  GetUserRoleNameById(id): Observable<any> {
    const url = `${`https://localhost:44307/api/User_UserRoles`}/${id}`;
    return this.http.get<any>(url, id);
  }
}