import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleFavoritesBar = new EventEmitter<boolean>()

  aboutDisplayed = false

  constructor() { }

  toggleAboutDisplayed(ev) {
    ev.stopPropagation();
    this.aboutDisplayed = !this.aboutDisplayed
  }

  ngOnInit(): void {
  }

}
