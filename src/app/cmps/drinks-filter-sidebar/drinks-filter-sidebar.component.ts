import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filters } from 'src/app/interface/Cocktail';
import { subFilters } from 'src/app/interface/Cocktail';

@Component({
  selector: 'app-drinks-filter-sidebar',
  templateUrl: './drinks-filter-sidebar.component.html',
  styleUrls: ['./drinks-filter-sidebar.component.scss']
})



export class DrinksFilterSidebarComponent implements OnInit {

  @Input() filters: Filters[]
  @Output() onFilterEvent = new EventEmitter<{}>()

  filterQuery = {}
  constructor() { }

  onChangeFilter(filters: subFilters) {
    console.log('filter sidebar got', filters)
    this.filterQuery[filters.header] = filters.checkedFilters
    this.onFilterEvent.emit(this.filterQuery)
  }

  ngOnInit(): void {

  }

}
