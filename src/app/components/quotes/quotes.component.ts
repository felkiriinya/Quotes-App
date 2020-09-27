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
        new Quotes('Sometimes life is going to hit you in the head. Dont loose faith.','Steve Jobs','Felista Kiriinya', new Date(2020,1,23),6,1),
        new Quotes('The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Faith Mucami',new Date(2020,3,30),4,3),
        new Quotes('Competitions are for horses not artists','Anonymous', 'Eustine whels',new Date(2020,1,23),3,4),
        new Quotes('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt', 'James Racher',new Date(2020,4,10),1,0),
        new Quotes('If you can make a woman laugh you can make her do almost anything','Marlyn Monroe','Harry Thunder',new Date(2020,5,9),9,2),
        new Quotes('Life is what happens when you are making other plans','John Lennon', 'George Whither',new Date(2020,6,12),1,0),
    ]

    //function for ading a new quote
    addNewQuote(quote) {
       
        this.quotes.push(quote)
      }

    //function for toggling small text
    toggleDetails(index) {
        
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
      }  

    //function for deleting quote

    deletingQuote(deleteQuote, index){
        if(deleteQuote){
            let toDelete =confirm("Are you sure you want to delete this quote?")

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
