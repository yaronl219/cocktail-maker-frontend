import { Component, OnInit, Input } from '@angular/core';
import { CocktailMinified } from 'src/app/interface/Cocktail';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-drink-minified',
  templateUrl: './drink-minified.component.html',
  styleUrls: ['./drink-minified.component.scss']
})
export class DrinkMinifiedComponent implements OnInit {
  @Input() cocktail: CocktailMinified

  constructor(private favoriteService: FavoriteService) { }

  isFavorite: boolean


  ngOnInit(): void {
    // set initial state
    this.isFavorite = this.favoriteService.isFavorite(this.cocktail._id)
    // subscribe to future changes
    this.favoriteService.subscribeToFavorites().subscribe(favorites => {
      this.isFavorite = this.favoriteService.isFavorite(this.cocktail._id)
    })
  }

  onToggleFavorite():void {
    console.log('is favorite',this.isFavorite)
    if (this.isFavorite) {
      this.isFavorite = false
      this.favoriteService.removeFavorite(this.cocktail._id)
    } else {
      this.isFavorite = true
      this.favoriteService.addToFavorites(this.cocktail)
    }

  }

}
