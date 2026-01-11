import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataProcess } from './services/data-process';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Injection du service DataProcess (fourni à la racine de l'application)
  private readonly _dataService = inject(DataProcess);

  // Dérivation d'un signal nbTotalEtablissements qui expose le nombre d'établissements

  
  // Dérivation d'un signal qui expose les 10 premiers établissements


}
