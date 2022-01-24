import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayOrNotDirective } from 'src/app/utils/directives/displayOrNot/display-or-not.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  subPage: any;
  url: any;

  @Input() rated: any;
  @Output() routePath = new EventEmitter<any>();
  @ViewChild(DisplayOrNotDirective) displayOrNotDirective: DisplayOrNotDirective;

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rated'].currentValue) {
      this.displayOrNotDirective.display();
    }
  }

  ngOnInit(): void {
    this.url = this.router.url.replace(/[^\w\s]/gi, '');
    if (this.url === 'customer') {
      this.subPage = 'home';
    } else {
      this.subPage = 'addProduct';
    }
  }

  back() {
    this.router.navigate(['/']);
  }

  route(url: string) {
    this.subPage = url;
    this.routePath.emit(url);
  }

}
