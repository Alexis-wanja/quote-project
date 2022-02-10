import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { TimeCountPipe } from '../time-count.pipe';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;

  constructor() {this.quote =new Quotes("","","",new Date(),0,0) }

  ngOnInit(): void {
  }

}
