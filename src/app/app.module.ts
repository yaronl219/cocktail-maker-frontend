import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DrinkListComponent } from './cmps/drink-list/drink-list.component';
import { DrinkMinifiedComponent } from './cmps/drink-minified/drink-minified.component';
import { DrinksFilterTopComponent } from './cmps/drinks-filter-top/drinks-filter-top.component';
import { DrinksFilterSidebarComponent } from './cmps/drinks-filter-sidebar/drinks-filter-sidebar.component';
import { DrinksFilterSubComponent } from './cmps/drinks-filter-sub/drinks-filter-sub.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginatorComponent } from './cmps/paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DrinkDetailsComponent } from './pages/drink-details/drink-details.component';
import { NavbarComponent } from './cmps/navbar/navbar.component';
import { FavoritesSidebarComponent } from './cmps/favorites-sidebar/favorites-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { VideoPlayerComponent } from './cmps/video-player/video-player.component';
import { StarRatingComponent } from './cmps/star-rating/star-rating.component';
import { AboutComponent } from './cmps/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkListComponent,
    DrinkMinifiedComponent,
    DrinksFilterTopComponent,
    DrinksFilterSidebarComponent,
    DrinksFilterSubComponent,
    PaginatorComponent,
    DrinkDetailsComponent,
    NavbarComponent,
    FavoritesSidebarComponent,
    VideoPlayerComponent,
    StarRatingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
