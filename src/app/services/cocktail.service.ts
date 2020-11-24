import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  

  getCocktails(filter: {}) {
    const filters = this.parseFilters(filter)
    console.log('getting cocktails in service')
    return this.http.get(`${environment.baseURL}ingredients?${filters}`)
      .pipe()
  }

  getCocktail(id:string) {
    return this.http.get(`${environment.baseURL}${id}`).pipe()
  }

  getCocktailByName(name:string) {
    return this.http.get(`${environment.baseURL}name/${name}`).pipe()
  }

  private parseFilters(filter:{}) {
    let queryParams = new URLSearchParams()
    console.log(filter)
    for (const key in filter) {
      if (!filter[key]) continue
      else if (typeof(filter[key]) !== "object") {
        queryParams.append(key,filter[key])
      } else {
        // if filter is object than it is an array
        const joinedQuery = filter[key].join(',')
        queryParams.append(key,joinedQuery)
      }
    }
    return queryParams.toString()
  }

}
