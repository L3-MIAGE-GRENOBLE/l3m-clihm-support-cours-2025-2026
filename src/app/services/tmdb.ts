import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tmdbToken } from '@data/tmdb-token';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tmdb {
  private readonly _httpClient = inject(HttpClient);

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
    console.log('Tmdb promise', response);

    response.then(
      data => {
        console.log('Tmdb promise', response);
        console.log('Tmdb data', data);
        // Problème : ici on ne peut pas vérifier le type, la structure, des données reçues
      }
    );
  }

}
