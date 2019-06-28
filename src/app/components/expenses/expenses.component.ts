import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expenses.service';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
 
})
export class ExpensesComponent implements OnInit {
  public expenses: any = null;
  totalExpenses = 20;
  pageSize = 5;
  public displayedColumns: string[] = ['description', 'location', 'date', 'numberOfComments'];
 

  pageData: PageEvent;
  constructor(private expenseService : ExpenseService, private route: Router) {
    this.getAllExpenses();
    this.onChangedPage(this.pageData);
    
  }
  
  ngOnInit() {
   
  };
 
  onChangedPage(pageData: PageEvent) {
    this.expenseService.getAllExpenses().subscribe(c =>{
      this.expenses = c;
      console.log(pageData);
    })
  }
  getAllExpenses() {
    
    //this.expenses = []
    this.expenseService.getAllExpenses().subscribe(e => {
        this.expenses = e;
        console.log(e);
    });
  }
  goBack() {
    this.route.navigate(['']);
  }
}
