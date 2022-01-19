import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  rating = [0, 1, 2, 3, 4, 5]

  name: string;
  selectedRating: any = '0';
  comment: string;
  isSubmit = false;

  @Output() yourRating = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    this.isSubmit = true;

    if (this.name && this.comment) {
      var obj = {
        name: this.name,
        rating: this.selectedRating,
        comment: this.comment
      }

      this.yourRating.emit(obj);
      this.isSubmit = false;
    }


  }

}
