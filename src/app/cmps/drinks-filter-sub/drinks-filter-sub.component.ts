import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drinks-filter-sub',
  templateUrl: './drinks-filter-sub.component.html',
  styleUrls: ['./drinks-filter-sub.component.scss']
})
export class DrinksFilterSubComponent implements OnInit {

  @Input() filters:[]
  @Input() filterHeader: string
  @Input() title: string
  @Output() onChangeFilter = new EventEmitter<{}>()

  amountOfFiltersToDisplay = 5

  constructor() { }

  checkedFilters = []

  isChecked(filter:string) {
    if (this.checkedFilters.includes(filter)) return true
    return false
  }

  toggleAmountOfFilters() {
    if (this.amountOfFiltersToDisplay === 5) return this.amountOfFiltersToDisplay = this.filters.length
    return this.amountOfFiltersToDisplay = 5  
  }

  onCheck(ev,filter) {
    (ev.target.checked) ? this.checkedFilters.push(filter) : this.checkedFilters = this.checkedFilters.filter(fil => fil !== filter)
    console.log(this.checkedFilters)
    this.onChangeFilter.emit({header:this.filterHeader,checkedFilters:this.checkedFilters})
  }
  ngOnInit(): void {
  }

}
