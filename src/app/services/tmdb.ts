import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Movies } from '@data/movie';
import { parseMovieSearchResult } from '@data/movie-search';
import { tmdbToken } from '@data/tmdb-token';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tmdb {
  private readonly _httpClient = inject(HttpClient);
  private readonly _movies = signal<Movies>([]);
  public readonly movies = this._movies.asReadonly();

  public searchMovies(query: string) {
    const req = this._httpClient.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: { query },
        headers: {
          Authorization: `Bearer ${tmdbToken}`,
        }
      }
    );

    const response = firstValueFrom(req);
    console.log('Tmdb promise', response);  // A

    response.then(
      parseMovieSearchResult
    ).then(
      moviesSearchResult => {
        this._movies.set(moviesSearchResult.results);
      }
    ).catch(
      err => console.error("Une erreur est survenue lors de la recherche de films :", err)
    )

    console.log("coucou on a terminé la méthode searchMovies");  // C
  }

}
