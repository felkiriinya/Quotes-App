import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
 
    @Input () quote: Quotes;

    @Output() deleteQuote = new EventEmitter<boolean>();

    quoteDelete(deleteyes:boolean){
        this.deleteQuote.emit(deleteyes);
    }
    
  constructor() { }

  //function that increments upvotes

  upVote(){
      this.quote.upVote++;
  }

  //function that increments downvotes

  downVote(){
      this.quote.downVote++;
  }

  ngOnInit(): void {
  }

}
