import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuotesDetailsComponent } from './components/quotes-details/quotes-details.component';
import { QuotesFormComponent } from './components/quotes-form/quotes-form.component';
import { HighlightQuoteDirective } from './directives/highlight-quote.directive';
import { TimeQuotePipe } from './pipes/time-quote.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    HighlightQuoteDirective,
    TimeQuotePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
