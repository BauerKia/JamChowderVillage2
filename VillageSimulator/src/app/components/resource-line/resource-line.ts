/**
 * To Do:
 * - ResourceLine:
        - Displays the icon
        - Displays the type
        - Displays the amount for one resource
 */

import { Component, Input } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { Resources } from '../../interfaces/resources';
import { Improvements } from '../../interfaces/improvements';


@Component({
  selector: 'resource-line',
  imports: [CommonModule],
  templateUrl: './resource-line.html',
  styleUrl: './resource-line.css'
})
export class ResourceLine {
//doesn't have a constructor, so basically making is optional? 
// Like its okay, there will be something being inputed
  @Input()
  resource!: Resources;
  improvement!: Improvements;


}


// Icon + Name of resource can be on 1 line 
//Available RSS linked to starting + 