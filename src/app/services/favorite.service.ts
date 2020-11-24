import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CocktailMinified } from '../interface/Cocktail';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {


  constructor(private storageService: LocalStorageService) { }

  private favorites = new Subject<CocktailMinified[]>()


  addToFavorites(favoriteCocktail: CocktailMinified) {
    this.loadFavorites()
    const favorites = this.getFavoritesFromStorage()
    favorites.push(favoriteCocktail)
    this.setState(favorites)
    this.storageService.saveToStorage('favorites', favorites)
  }

  removeFavorite(id: string) {
    this.loadFavorites()
    let favorites = this.getFavoritesFromStorage()
    favorites = favorites.filter(cocktail => cocktail._id !== id)
    this.setState(favorites)
    this.storageService.saveToStorage('favorites', favorites)
  }

  isFavorite(id: string) {
    const favorites = this.getFavoritesFromStorage()
    if (!favorites.length) return false
    if (favorites.find(cocktail => cocktail._id === id)) return true
    return false
  }

  subscribeToFavorites(): Observable<CocktailMinified[]> {
    
    return this.favorites.asObservable()
  }

  loadFavorites(): void {
    const favorites = this.getFavoritesFromStorage()
    
    this.setState(favorites)
  }

  getFavoritesFromStorage(): CocktailMinified[] {
    let favorites = this.storageService.loadFromStorage('favorites')
    if (!favorites) favorites = []
    return favorites
  }

  private setState(favorites: CocktailMinified[]) {
    this.favorites.next(favorites)
  }



}
