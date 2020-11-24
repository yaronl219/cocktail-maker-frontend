import { Component, ElementRef, AfterViewInit, ViewChild, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { CocktailService } from 'src/app/services/cocktail.service';


@Component({
  selector: 'app-drinks-filter-top',
  templateUrl: './drinks-filter-top.component.html',
  styleUrls: ['./drinks-filter-top.component.scss']
})
export class DrinksFilterTopComponent implements OnInit {

  @Output() onFilterEvent = new EventEmitter<string>()
  

  filter: string = ''
  filterUpdate = new Subject<string>()
  filteredOptions

  constructor(private cocktailService:CocktailService, private router: Router) {
    this.filterUpdate.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(filter => {
      
      this.cocktailService.getCocktailByName(filter).subscribe(filtered => {

        if (Object.values(filtered).length) {
          this.filteredOptions = filtered
        } else {
          this.filteredOptions = []
        }
      })
    })
   }


   onSelect(event) {
     const drinkId = event.option.value
     this.router.navigate(['/cocktail',drinkId])
     
   }

  ngOnInit(): void {
  }

}
