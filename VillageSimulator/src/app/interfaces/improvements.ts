/**
To Do:
- Properties: Type (field, house) | level (Starts at 1, +1 each upgrade)

 **/

export interface Improvements {

icon : string;
//union types
type : "House" | "Field" | "Lumber Mill" | "Pasture" | "Well";
level : number;
// Anything else? Maybe come back to build more out?
//Similar to the elements game Little Alchemy?
}
