import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Expense } from '../models/expense';

@Injectable ({providedIn: 'root'})
export class ExpenseService{
    private expensesSubject: BehaviorSubject<Expense[]>;
    public expenses: Expense[];

    constructor(private http: HttpClient){
        this.expensesSubject = new BehaviorSubject<Expense[]>([]);
    }

    
    getAllExpenses(){

        return this.http.get<any>('https://localhost:44307/api/expenses')
            // .pipe(map(respone => {
            //     this.expenses = respone.entries;
            //     this.expensesSubject.next(this.expenses);
            //     return respone.entries;
            // }))
    }
    
}