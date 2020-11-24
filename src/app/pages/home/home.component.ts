import { Component, OnInit } from '@angular/core';
import { CocktailMinified, Filters } from 'src/app/interface/Cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  cocktails: CocktailMinified[]
  filters: Filters
  query = { p: 1 }
  isLoading = false
  cocktailAmount = 0
  isFilterBarOpen = true
  

  getCocktails = (): void => {
    this.isLoading = true
    this.cocktailService.getCocktails(this.query).subscribe(res => {
      this.cocktails = res['cocktailsMinified']
      this.filters = res['filters']
      this.cocktailAmount = res['cocktailAmount']
      this.isLoading = false
      
    })
  }

  setFilterBarOpen(isOpen:boolean) {
    this.isFilterBarOpen = isOpen
  }

  toggleFilterBarOpen() {
    this.setFilterBarOpen(!this.isFilterBarOpen)
  }

  setFilterBarOpenOnWindowWidth(windowWidth:number) {
    if (windowWidth < 600) {
      this.setFilterBarOpen(false)
    } else {
      this.setFilterBarOpen(true)
    }
  }

  onResize(event) {
    const windowWidth = event.target.innerWidth
    this.setFilterBarOpenOnWindowWidth(windowWidth)
  }  

  onFilterName(name: string): void {
    this.query['q'] = name
    this.query.p = 1
    this.getCocktails()
    // this.setCocktailsForDisplay()
  }

  onPageSwitch(pageNo:number) {
    this.query.p = pageNo
    this.getCocktails()
  }

  onFilterByParameter(filterParams:{}) {
    for (const key in filterParams) {
      if (filterParams[key].length) {
        this.query[key] = filterParams[key]
      } else {
        delete this.query[key]
      }
    }
    this.query.p = 1
    this.getCocktails()
  }

  ngOnInit(): void {
    this.getCocktails()
    this.setFilterBarOpenOnWindowWidth(window.innerWidth)
  }

}
