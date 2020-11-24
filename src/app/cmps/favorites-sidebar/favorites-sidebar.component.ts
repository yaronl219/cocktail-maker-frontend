import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorites-sidebar',
  templateUrl: './favorites-sidebar.component.html',
  styleUrls: ['./favorites-sidebar.component.scss']
})
export class FavoritesSidebarComponent implements OnInit {

  @Input() isFavoritesBarOpen:boolean

  constructor(private favoriteService:FavoriteService) { }

  favorites = []

  ngOnInit(): void {
    // get the initial favorites to display
    this.favorites = this.favoriteService.getFavoritesFromStorage()
    
    // subscribe to future changes
    this.favoriteService.subscribeToFavorites().subscribe(favorites => {
      this.favorites = favorites
    })
  }
  
  
}
