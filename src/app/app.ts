import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataProcess } from './services/data-process';
import { College } from './data/college.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
    // RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Injection du service DataProcess (fourni à la racine de l'application)
  private readonly _dataService = inject(DataProcess);

  // Dérivation d'un signal nbTotalEtablissements qui expose le nombre d'établissements
  protected readonly nbEtab = computed(
    () => this._dataService.etablissements().length
  );

  // Notion de nombre d'item par page
  protected readonly possibleItemsPerPage: readonly number[] = [10, 25, 50];
  protected readonly nbItemsPerPage = signal<number>(10);

  // Notion de page courante
  protected readonly pageCourante = signal(0);

  protected previousPage(): void {
    this.pageCourante.update( v => v > 0 ? v - 1 : 0 )
  }

  protected nextPage(): void {
    this.pageCourante.update( v => v + 1 )
  }
  
  // Dérivation d'un signal qui expose les 10 premiers établissements
  protected readonly filteredList = computed<readonly College[]>(
    () => {
      const from = this.pageCourante() * this.nbItemsPerPage();
      const to   = from + this.nbItemsPerPage();
      return this._dataService.etablissements().slice(from, to)
    }
  )

}
