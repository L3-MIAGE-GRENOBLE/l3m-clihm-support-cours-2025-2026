import { Component, computed, input } from '@angular/core';
import { Movie as MovieData } from '@data/movie';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.html',
  styleUrl: './movie.scss',
})
export class Movie {
  public readonly film = input.required<MovieData>();

  protected readonly urlImage = computed(
    () => `https://media.themoviedb.org/t/p/w300_and_h450_face/${this.film().poster_path}`
  )
}
