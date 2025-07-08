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
    this.listOfImprovements.push({icon:"" ,type: "House",level: this.currentLevel})
    this.listOfImprovements.push({icon:"" ,type: "Field",level: this.currentLevel})
    this.listOfImprovements.push({icon:"" ,type: "House",level: this.currentLevel})
    this.listOfImprovements.push({icon:"" ,type: "House",level: this.currentLevel})
    this.listOfImprovements.push({icon:"" ,type: "House",level: this.currentLevel})
    this.listOfImprovements.push({icon:"" ,type: "House",level: this.currentLevel})

    }
}
