import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktail-maker';

  isFavoritesBarOpen = false

  toggleFavoriteBarOpen():void {
    this.isFavoritesBarOpen = !this.isFavoritesBarOpen
  }
}
