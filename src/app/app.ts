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
  private readonly dataService = inject(DataProcess);
}
