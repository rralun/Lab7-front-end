import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentService } from 'src/app/services/comments.service';
import {PageEvent } from '@angular/material';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
  })
  export class CommentsComponent implements OnInit {
    public comments: any = null
    public filteredComments: any = null;
    public displayedColumns: string [] = ['id','text','important','expenseId'];
    totalComments = 20;
    pageSize = 5;

    pageData: PageEvent;
    constructor(private commentService : CommentService, private route: Router) {
      this.getAllComments();
    }
          
    ngOnInit() {
      
    }
   
    onChangedPage(pageData: PageEvent) {
          console.log(pageData);
    }
   
    getAllComments() {
      
      this.commentService.getAllComments().subscribe(c => {
          this.comments = c;
          console.log(c);
      });
    }
    filteredComment(filter: string) {
      this.commentService.getAllFilteredComments(filter).subscribe(c => {
        this.filteredComments = c;
        console.log(c);
      })
  
    }
  
    goBack() {
      this.route.navigate(['']);
    }
  
  }
