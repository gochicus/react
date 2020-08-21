export const FontFamily:FontFamily = {
    bebas: 'Bebas Neue',
    roboto: 'Roboto'
}
 interface FontFamily {
    bebas:string,
    roboto:string,

}
export const NavFontWeight:NavFontWeight ={
    booster:500,
    head:'bold',
    currency:500,
    amount:900

}
export interface NavFontWeight {
    booster: number,
    head:string,
    currency:number,
    amount:number
}
export const NavFontSize:NavFontSize = {
    booster:'24px',
    head:'56px',
    currency:'12px',
    amount:'14px'
}
export interface  NavFontSize {
    booster:string,
    head:string,
    currency:string,
    amount:string,
}
export const NavLineHeight:NavLineHeight = {
    booster:'32px',
    head:'42px',
    currency:'20px',
    amount:'22px'
}
export interface  NavLineHeight {
    booster:string,
    head:string,
    currency:string,
    amount:string
}
export const ImgBoardMainLine:ImgBoardMainLine = {
    weight: 'bold',
    size: '40px',
    height:' 42px',
}
interface ImgBoardMainLine {
    weight:string,
    size:string,
    height:string
}
export const ImgBoardSubline:ImgBoardSubline ={
    weight: 'bold',
    size: '40px',
    height:' 42px',

}
interface ImgBoardSubline {
    weight:string,
    size:string,
    height:string
}