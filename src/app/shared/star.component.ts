import {
  Component,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class starComponent implements OnChanges {
  @Input() rating: number = 0;
  cropwidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropwidth = (this.rating * 75) / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
