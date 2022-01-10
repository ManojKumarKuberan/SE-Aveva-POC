import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisplayOrNot]'
})
export class DisplayOrNotDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit() {
    console.log('after', this.elRef.nativeElement.style.display, this.elRef.nativeElement)
    this.elRef.nativeElement.style.display = 'none';
  }

  display() {
    console.log('display', this.elRef.nativeElement.style.display, this.elRef.nativeElement)
    this.elRef.nativeElement.style.display = 'block';
  }

}
