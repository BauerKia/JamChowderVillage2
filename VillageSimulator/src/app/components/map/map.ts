/**
 To Do:
 - Given an array of improvements
 - Display the Grid (See CSS Grid feature)
 - SubComponents
     - Tile
        - Displays a tile on the map
        - May be empty or may display an improvement
     - AddImprovementDialog:
        - Form that shows when a user clicks an empty tile
        - Allows User to select a type of improvement to add (see methods)
     - EditImprovementDialog:
        - Pane that displays when the users clicks an existing improvement
        - Shows information about the improvement
        - Has buttons to Upgrade, Downgrade, or Remove improvement (see methods)
     - Options to ADD or Upgrade an improvement must be disabled:
        - IF there are not enough resources to meet costs
     - Options to Downgrade or Remove an improvement must be disabled:
        - IF the provided resources would go below zero IF that action were taken

 **/

import { Component } from '@angular/core';
//import {MatGridListModule} from '@angular/material/grid-list';
import { Router }        from '@angular/router';
import { Tile } from "../tile/tile";
import { CommonModule }   from '@angular/common';

@Component({
  selector: 'map',
  imports: [Tile, CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map {
   

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
