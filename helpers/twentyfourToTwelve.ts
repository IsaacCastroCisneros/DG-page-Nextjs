export default function twentyfourToTwelve(horaFull:string)
{
    const arr = horaFull.split(':')
    arr.pop() 

    const hora:number = Number(arr[0])

    if(hora>13)
    {
       return `${hora-12}:${arr[1]} PM`
    }

    return `${arr.join(':')} AM` 
}