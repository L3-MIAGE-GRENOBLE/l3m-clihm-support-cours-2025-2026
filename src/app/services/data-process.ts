import { Injectable } from '@angular/core';
import { strCollegesCSV } from '../data/data.college.csv';
import { DataCollege, processStringToDataCollege } from '../data/college.tuple';
import { processCollegeFromTuple } from '../data/college.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProcess {
  
  constructor() {
    console.log("DataProcess::constructor (fichier ./src/app/services/data-process.ts)");
    const listColleges = strCollegesCSV
      .split("\n")
      .map(processStringToDataCollege)
      .map(processCollegeFromTuple)
    
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
    )
  }
}
