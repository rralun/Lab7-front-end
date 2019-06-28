import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
  })
  export class UsersComponent implements OnInit {
  
    public users: any = null;
    public changes: any = null;
   
    public displayedColumns: string[] = ['Username', 'Email'];
    public displayedColumnsChanges: string[] = ['UserRoleName', 'StartTime', 'EndTime'];
  
    constructor(private userService: UserService, private route: Router) {
      this.getAllUsers();
    }
  
    ngOnInit() {
    }
  
    getAllUsers() {
      //this.users = []
      this.userService.getAllUsers().subscribe(u => {
        this.users = u;
        console.log(u);
      });
    }
    getRoleChanges(id) {
      this.userService.GetUserRoleNameById(id).subscribe(ur => {
        this.changes = ur;
        console.log(ur)
      })
    }
  
    goBack() {
      this.route.navigate(['']);
    }
  }