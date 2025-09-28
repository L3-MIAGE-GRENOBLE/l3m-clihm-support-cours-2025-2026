import { Injectable } from '@angular/core';
import { strCollegesCSV } from '../data/data.college.csv';

@Injectable({
  providedIn: 'root'
})
export class DataProcess {
  
  constructor() {
    console.log("DataProcess::constructor (fichier ./src/app/services/data-process.ts)");

  }
}
