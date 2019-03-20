import { CategoriesComponent } from './categories/categories.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AddMoviesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
