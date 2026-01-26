import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { Tmdb } from '@services/tmdb';
import { Movie } from './movie/movie';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
    FormsModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule,
    Movie
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly _tmdb = inject(Tmdb);
  protected readonly movies = this._tmdb.movies;

  protected readonly searchQueryString = signal<string>("");
  
  protected searchMovie() {
    this._tmdb.searchMovies(this.searchQueryString());
    this.searchQueryString.set("");
  }
}
