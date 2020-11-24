import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() avgRating: number
  @Input() ratings: []
  @Output() onAddRating = new EventEmitter<number>()

  currRating = 0
  possibleRatings = [1, 2, 3, 4, 5]
  changeOnHover = true

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    if (this.avgRating) {
      const prevRating = this.ratingService.hasRated(this.ratings)
      if (prevRating) {
        this.currRating = prevRating
        this.changeOnHover = false
      }
    }
  }


  onClickStar(num: number) {
    this.currRating = num
    this.changeOnHover = false
    this.onAddRating.emit(num)
  }

  onHover(num: number) {
    if (!this.changeOnHover) return
    this.currRating = num
  }
}
