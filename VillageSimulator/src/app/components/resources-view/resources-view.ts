/**
To Do:
- initial start at  5 lumber, 5 grain, 5 water, and 1 sheep 
- upgraded improvements are just that improvement multiplied by the level
- SubComponents
    - ResourceLine:
        - Displays the icon
        - Displays the type
        - Displays the amount for one resource
 **/

import { Component } from '@angular/core';
import { ResourceLine } from "../resource-line/resource-line";
import { VillageService } from '../../services/village.service';
import { CommonModule }   from '@angular/common';
import { Resources } from '../../interfaces/resources';


@Component({
  selector: 'resources-view',
  imports: [CommonModule, ResourceLine],
  templateUrl: './resources-view.html',
  styleUrl: './resources-view.css'
})
export class ResourcesView {


  public currentRss : Resources [] ;
  
  constructor(private villageService : VillageService){
  this.currentRss = villageService.getBaseResources();
  
  }

}
