import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() {this.quoteModel= new Quotes("","","",new Date(),0,0)
}

  quoteModel: Quotes;

   showNew: Boolean = false;

   submitType = 'Save';
 
   quotes = [
     new Quotes('Men are masters of their fate.', 'William Shakespear', '1', new Date(), 0, 0),
     new Quotes('If you do not like a story, write your own', 'Chinua Achebe', '2', new Date(), 0, 0),
   ];
 
   onNew() {
     this.quoteModel = new Quotes('', '', '', new Date(), 0, 0);
     this.submitType = 'Save';
     this.showNew = true;
   }
   onSave() {
     if (this.submitType === 'Save') {
       this.quotes.push(this.quoteModel);
     }
     this.showNew = false;
   }
 
   onCancel() {
     this.showNew = false;
   }
   delete() {
     this.quotes.splice(1);
   }

  ngOnInit(): void {
  }

}
