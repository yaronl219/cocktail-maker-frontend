import { Component, OnInit, Input } from '@angular/core';
import { CocktailMinified } from 'src/app/interface/Cocktail';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  @Input() cocktails: CocktailMinified[]
  constructor() { }

  ngOnInit(): void {
  }

}
