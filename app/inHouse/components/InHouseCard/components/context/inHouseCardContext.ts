import React from "react"

interface values
{
  setShow:(value:boolean)=>void,
  id:string,
  titulo:string
}

const inHouseCardContext = React.createContext<values>({setShow:(value)=>null,id:'',titulo:''})

export default inHouseCardContext