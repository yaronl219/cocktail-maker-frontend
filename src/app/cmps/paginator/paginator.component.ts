import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() cocktailAmount:number
  @Input() currPage: number
  @Output() onPageSwitchEvent = new EventEmitter<number>()


  constructor() { }

  
  onPageSwitch(page:{pageIndex}) {
    console.log(page)
    this.currPage = page.pageIndex + 1
    this.onPageSwitchEvent.emit(this.currPage)
  }

  ngOnInit(): void {
    
  }

}
