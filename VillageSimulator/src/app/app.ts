import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'VillageSimulator';

  gridItems = [
    { name: 'Item 1'},
    { name: 'Item 2'},
    { name: 'Item 3'},
    { name: 'Item 4'},
    { name: 'Item 5'},
    { name: 'Item 6'},
    { name: 'Item 7'},
    { name: 'Item 8'},
    { name: 'Item 9'},
    { name: 'Item 10'},
    { name: 'Item 11'},
    { name: 'Item 12'},
    { name: 'Item 13'},
    { name: 'Item 14'},
    { name: 'Item 15'},
    { name: 'Item 16'},
    { name: 'Item 17'},
    { name: 'Item 18'},
    { name: 'Item 19'},
    { name: 'Item 20'},
    { name: 'Item 21'},
    { name: 'Item 22'},
    { name: 'Item 23'},
    { name: 'Item 24'},
    { name: 'Item 25'}
  ];

  onGridItemClick(item: any) {
    console.log('Grid item clicked:', item.name);
  }

}
