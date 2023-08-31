export default interface estamosBox
{
    img:{src:string,h:number,w:number},
    title:string,
    decription:string,
    num:string,
    link:()=>{path:string,label:string,color?:string}
}
  