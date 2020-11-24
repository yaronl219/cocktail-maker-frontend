import { Component, OnInit,Input } from '@angular/core';
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
  
  isFavorite: Boolean
  
  
  ngOnInit(): void {
    this.isFavorite = this.favoriteService.isFavorite(this.cocktail._id)
  }

  onToggleFavorite() {
    (this.isFavorite) ? this.favoriteService.removeFavorite(this.cocktail._id) :
      this.favoriteService.addToFavorites(this.cocktail)
      this.isFavorite = !this.isFavorite
  }

}
