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
   //https://stackoverflow.com/questions/69730632/how-to-render-multiple-component-type-variables-through-a-template

   mapList: Tile [][] = defaultMap() ;
  
constructor(){}
  

//   onGridItemClick(item: any) {
//     console.log('Grid item clicked:', item.name);
//   }

}

function defaultMap(){
   let map: Tile[] [] = [];
   for(var i = 0; i < 5; i++){
      map[i] = [];
      for(var j = 0; j < 5; j++){
         map[i][j] = new Tile();
      }
   }
 return map;
}
