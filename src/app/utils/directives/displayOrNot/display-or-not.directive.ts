import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisplayOrNot]'
})
export class DisplayOrNotDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.elRef.nativeElement.style.display = 'none';
  }

  display() {
    this.elRef.nativeElement.style.display = 'block';
  }

}
