/**
 To Do:
 - Hold an array of improvements
 - Hold current resource totals
 - Needs Methods/Behaviors: addImprovement, removeImprovement, upgradeImprovement, downgradeImprovement

 **/

import { Injectable } from '@angular/core';
import { Improvements } from '../interfaces/improvements';
import { Resources } from '../interfaces/resources';


@Injectable({
  providedIn: 'root'
})

export class VillageService {

private listOfImprovements : Improvements[] = []
private baseResources : Resources[] = []
private startLevel = 1
//Check this just in case
public currentLevel = this.startLevel

  constructor() {
    this.listOfImprovements.push({icon:"images/House.png" ,type:"House",level: this.currentLevel})
    this.listOfImprovements.push({icon:"images/Field.png" ,type: "Field",level: this.currentLevel})
    this.listOfImprovements.push({icon:"images/Pasture.png" ,type: "Pasture",level: this.currentLevel})
    this.listOfImprovements.push({icon:"images/Lumber Mill.png" ,type: "Lumber Mill",level: this.currentLevel})
    this.listOfImprovements.push({icon:"images/Well.png" ,type: "Well",level: this.currentLevel})

    this.baseResources.push({name:"People",icon: "images/House.png", amt: 0 })
    this.baseResources.push({name:"Grain",icon: "images/Field.png", amt: 5 })
    this.baseResources.push({name:"Sheep",icon: "images/Pasture.png", amt: 1 })
    this.baseResources.push({name:"Lumber",icon: "images/Lumber Mill.png",  amt: 5 })
    this.baseResources.push({name:"Water",icon: "images/Well.png", amt: 5 })

    }

    getImprovementList()  : Improvements[] {  // this function returns a StudentInfo array
         return this.listOfImprovements;
       }

       getBaseResources()  : Resources[] {  // this function returns a StudentInfo array
         return this.baseResources;
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
