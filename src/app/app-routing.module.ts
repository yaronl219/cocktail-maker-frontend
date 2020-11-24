import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkDetailsComponent } from './pages/drink-details/drink-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'cocktail/:id', component: DrinkDetailsComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
