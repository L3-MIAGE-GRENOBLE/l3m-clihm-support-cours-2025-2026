import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tmdb } from '@services/tmdb';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly _tmdb = inject(Tmdb);

  searchMovie(q: string) {
    this._tmdb.searchMovies(q);
  }
}
