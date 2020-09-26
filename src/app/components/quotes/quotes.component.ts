import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    // Quotes Array
    quotes:Quotes[]=[
        new Quotes('Sometimes life is going to hit you in the head. Dont loose faith.','~Steve Jobs','Felista Kiriinya', new Date(2020,1,23)),
        new Quotes('The greatest glory in living lies not in never falling, but in rising every time we fall.','Faith Mucami','~Nelson Mandela', new Date(2020,3,30)),
        new Quotes('Competitions are for horses not artists','~Anonymous', 'Eustine whels',new Date(2020,1,23)),
        new Quotes('If life were predictable it would cease to be life, and be without flavor.','~Eleanor Roosevelt', 'James Racher',new Date(2020,4,10)),
        new Quotes('If you can make a woman laugh you can make her do almost anything','~Marlyn Monroe','Harry Thunder',new Date(2020,5,9)),
        new Quotes('Life is what happens when you are making other plans','~John Lennon', 'George Whither',new Date(2020,6,12)),
    ]

    addNewQuote(quote) {
        /* function for adding a new quote */
        this.quotes.push(quote)
      }
  constructor() { }

  ngOnInit(): void {
  }

}
