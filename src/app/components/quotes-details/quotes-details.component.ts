import { Quote } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
 
    @Input () quote: Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
