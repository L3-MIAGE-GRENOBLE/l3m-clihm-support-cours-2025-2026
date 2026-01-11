import { Injectable, signal } from '@angular/core';
import { strCollegesCSV } from '../data/data.college.csv';
import { DataCollege, processStringToDataCollege } from '../data/college.tuple';
import { College, processCollegeFromTuple } from '../data/college.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProcess {

  // On définie un signal privé dans lequel on va pouvoir écrire les données
  // On le garde privé pour garder le contrôle de l'accès aux données
  // readonly signifie "seulement" qu'on ne pourra pas réaffecter l'attribut _etablissements
  // ça ne signifie PAS que le contenu du signal est immuable !
  // Ce signal pourra publier différentes listes d'établissements
  // Chacune de ces listes sera immuable (type readonly College[])
  // Observez que le type de l'attribut _etablissements est WritableSignal<readonly College[]>
  // Le signal doit toujours avoir une valeur, il est initialisé avec une liste vide
  private readonly _etablissements = signal<readonly College[]>([]);

  // On expose la liste des établissements via un attribut de type Signal<readonly College[]>
  // La valeur de ce signal est dérivée du signal privé _etablissements en utilisant la méthode asReadonly()
  // Ainsi, les consommateurs de ce service peuvent lire la liste des établissements
  // mais ne peuvent pas la modifier directement
  // L'attribut est public pour que les composants ou services qui injecteront DataProcess puissent y accéder
  // Observez que le type de l'attribut etablissements est Signal<readonly College[]>
  public readonly etablissements = this._etablissements.asReadonly();
  
  constructor() {
    console.log("DataProcess::constructor (fichier ./src/app/services/data-process.ts)");
    const listColleges = strCollegesCSV
      .split("\n")
      .map(processStringToDataCollege)
      .map(processCollegeFromTuple)
    
    // On peut maintenant écrire dans le signal privé _etablissements
    this._etablissements.set(listColleges);

    // On affiche dans la console les données traitées, à titre de débuggage provisoire
    console.log(
      "la liste complète:",
      listColleges,
      "\nla liste des REP PRIVE",
      listColleges.filter(e => e.nombre_eleves_total < 50),
      "nombre d'élèves en 2020 :",
      listColleges.reduce(
        (nb, c) => c.rentree_scolaire === 2020 ? nb + c.nombre_eleves_total : nb,
        0
      )
    );
  }
}
