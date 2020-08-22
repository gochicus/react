export const Display:Display = {
    display:'flex',
}
export interface Display {
    display: string,
}
export  const FlexDirection:FlexDirection={
    row:'row',
    column:'column',
}
export interface FlexDirection {
    row:string,
    column:string
}
export const JustifyContent:JustifyContent ={
    flexstart:'flex-start',
    flexend:'flrx-end',
    start:'start',
    end:'end',
    center:'center',
    spacearound:'space-around',
    spacebetween:'space-between',
    spaceevenly:'space-evenly'
}
export interface JustifyContent {
    flexstart:string,
    flexend:string,
    start:string,
    end:string,
    center:string,
    spacearound:string,
    spacebetween:string,
    spaceevenly:string
}
export const AlignItems:AlignItems = {
    stretch:'stretch',
    flexstart:'flex-start',
    flexend:'flex-end',
    center:'center',
    baseline:'baseline'
}
interface  AlignItems {
    stretch:string,
    flexstart:string,
    flexend:string,
    center:string,
    baseline:string
}
