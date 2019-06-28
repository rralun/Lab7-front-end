import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/services/userroles.service';


@Component({
  selector: 'app-userroles',
  templateUrl: './userroles.component.html',
  styleUrls: ['./userroles.component.scss']
})
export class UserRolesComponent implements OnInit {
  public userroles: any = null;
  public displayedColumns: string[] = ['id','name','description'];

  constructor(private userRoleService : UserRoleService) {
    this.getAllUsersRoles();
  }
    
  
  ngOnInit() {
 
  }
  getAllUsersRoles() {
    
    this.userRoleService.getAllUsersRoles().subscribe(f => {
        this.userroles = f;
        console.log(f);
    });
   }
}
