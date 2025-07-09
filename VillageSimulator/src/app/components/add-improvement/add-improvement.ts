/**
 * To Do:
 *  - Village SErvice -> allows us to use the array of improvements to pull the right icon and add it to the "map"
 *  - AddImprovementDialog:
        - Form that shows when a user clicks an empty tile
        - Allows User to select a type of improvement to add (see methods)
  
 */


import { Component } from '@angular/core';
import { Router }        from '@angular/router';
import { Improvements } from '../../interfaces/improvements';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'add-improvement',
  imports: [],
  templateUrl: './add-improvement.html',
  styleUrl: './add-improvement.css'
})
export class AddImprovement {

  public improvementList : Improvements [] ;

constructor(private villageService : VillageService){
this.improvementList = villageService.getImprovementList();

}


}
