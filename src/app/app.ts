import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { Tmdb } from '@services/tmdb';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
    FormsModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly _tmdb = inject(Tmdb);

  searchMovie() {
    this._tmdb.searchMovies("inception");
  }
}
