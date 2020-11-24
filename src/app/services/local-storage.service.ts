import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  saveToStorage(key:string, val:any) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
  }

  loadFromStorage(key:string) {
    var str = localStorage.getItem(key);
    var val = JSON.parse(str)
    return val;
  }

  constructor() { }
}
