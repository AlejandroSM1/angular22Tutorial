import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataBinding } from "./components/data-binding/data-binding";
// import { Variables } from './components/variables/variables';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular22Tutorial');
}
