import { Injectable } from '@angular/core';
import { strCollegesCSV } from '../data/data.college.csv';
import { processStringToDataCollege } from '../data/college.tuple';
import { processCollegeFromTuple } from '../data/college.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProcess {
  
  constructor() {
    console.log("DataProcess::constructor (fichier ./src/app/services/data-process.ts)");
    
  }
}
