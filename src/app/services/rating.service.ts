import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient, private storageService: LocalStorageService) { }

  addRating(cocktailId:string, rating:number) {
    const userId = this.getUserId()
    return this.http.put(`${environment.baseURL}${cocktailId}`, { userId, rating })
      .pipe()
  }

  hasRated (ratings:[]):any {
    const userId = this.getUserId()
    const rating = ratings.find(id => Object.keys(id)[0] === userId)
    if (rating) return Object.values(rating)[0]
    return null
  }

  private getUserId() {
    let userId = this.storageService.loadFromStorage('cocktailUser')
    if (!userId) {
      userId = this.makeId(10)
      this.storageService.saveToStorage('cocktailUser', userId)
    }
    return userId
  }

  private makeId(length) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
}
