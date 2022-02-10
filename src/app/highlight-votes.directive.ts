import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightVotes]'
})
export class HighlightVotesDirective {

  constructor(elem: ElementRef) { 
    elem.nativeElement.style.color =  "highlight-highest"
  }

}
