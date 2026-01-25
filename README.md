# L3mClihmSupportCours20252026

Une fois rebasé sur la branche, il faut réinstaller les dépendances :

```bash
npm ci
```

Puis lancer le serveur de développement :

```bash
npm start
``` 

## Les API HTTP utilisées

The Movie Database (TMDb) API : https://www.themoviedb.org/documentation/api

En particulier :
* Recherche de films : https://developer.themoviedb.org/reference/search-movie
* Crédits d'un film : https://developer.themoviedb.org/reference/movie-credits
* Evaluations spectateurs : https://developer.themoviedb.org/reference/movie-reviews

## Le système de vérification des données reçues

On utilise [la bibliothèque `zod`](https://github.com/colinhacks/zod) pour définir des schémas de validation des données reçues depuis l'API TMDb.