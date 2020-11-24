import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from 'src/app/interface/Cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {

  cocktail: Cocktail
  ingredients: []
  isFavorite: boolean

  constructor(private route: ActivatedRoute, 
    private cocktailService: CocktailService, 
    private favoriteService: FavoriteService, 
    private ratingService: RatingService,
    private router: Router) { }

  ngOnInit(): void {
    const drinkId = this.route.snapshot.paramMap.get('id')
    this.cocktailService.getCocktail(drinkId).subscribe(cocktail => {
      this.cocktail = cocktail
      this.parseIngredients()
      this.isFavorite = this.favoriteService.isFavorite(drinkId)
      console.log(this.cocktail)
      console.log(this.ingredients)
    })
  }

  parseIngredients(): void {
    this.ingredients = this.cocktail['arrDrinks'].map((ingredient, idx) => {
      let ingredientString = ''
      if (this.cocktail[`strMeasure${idx + 1}`]) {
        ingredientString += this.cocktail[`strMeasure${idx + 1}`] + ' '
      }
      ingredientString += ingredient
      return ingredientString
    })
  }

  onGoBack() {
    this.router.navigate(['/'])
  }

  onAddRating(num:number):void {
    console.log('details',num)
    this.ratingService.addRating(this.cocktail['_id'],num).subscribe(
      cocktail => this.cocktail = cocktail
    )
    
  }

   onToggleFavorite(): void {
    this.isFavorite = !this.isFavorite
    if (this.isFavorite) {
      const cocktailMinified = {
        strDrink: this.cocktail['strDrink'],
        _id: this.cocktail['_id'],
        strDrinkThumb: this.cocktail['strDrinkThumb'],
        strAlcoholic: this.cocktail['strAlcoholic'],
        strCategory: this.cocktail['strCategory']
      }
      this.favoriteService.addToFavorites(cocktailMinified)
    } else {
      this.favoriteService.removeFavorite(this.cocktail['_id'])
    }
  }
}
