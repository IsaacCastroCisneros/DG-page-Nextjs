export default interface cartItem
{
   id:string,
   titulo:string,
   precio:{final:number,descuento:number,normal:number},
   imagen:string
   tipo:string
   total_sesiones:number
}