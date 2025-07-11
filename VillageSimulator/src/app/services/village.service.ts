/**
 To Do:
 - Hold an array of improvements
 - Hold current resource totals
 - Needs Methods/Behaviors: addImprovement, removeImprovement, upgradeImprovement, downgradeImprovement

 **/

import { Injectable } from '@angular/core';
import { Improvements } from '../interfaces/improvements';

@Injectable({
  providedIn: 'root'
})

export class VillageService {

private listOfImprovements : Improvements[] = []
private startLevel = 1
//Check this just in case
public currentLevel = this.startLevel

  constructor() {
    this.listOfImprovements.push({icon:"House.png" ,type:"House",level: this.currentLevel})
    this.listOfImprovements.push({icon:"Field.png" ,type: "Field",level: this.currentLevel})
    this.listOfImprovements.push({icon:"Pasture.png" ,type: "Pasture",level: this.currentLevel})
    this.listOfImprovements.push({icon:"Lumber.png" ,type: "Lumber Mill",level: this.currentLevel})
    this.listOfImprovements.push({icon:"Well.png" ,type: "Well",level: this.currentLevel})
    }

    getImprovementList()  : Improvements[] {  // this function returns a StudentInfo array
         return this.listOfImprovements;
       }
}

export class VillageResources{

  private initialResources: Record<string, number>  = {
      "Villagers": 0,
      "Sheep": 0,
      "Crops": 0,
      "Trees": 0,

  }

  setNewResourceSet(newSet: any){
    this.initialResources = newSet
  }

  takeResource(resourceName: any, amount: any){
    
    if (resourceName.type !== String){
      console.warn("Resource Was not a String")
      return
    }

    this.initialResources[resourceName] -= amount
  }

}
