import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.css']
})
export class RatingInputComponent implements OnInit {
  @Input() max = 0;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  public stars: boolean[];
  
  ngOnInit() {
    this.stars = Array(this.max).fill(false);
  }

  public rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
    this.valueChange.emit(rating);
  }
}
