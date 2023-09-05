import inHouse from "@/interfaces/inHouse"
import React from "react"

interface values extends inHouse
{
  setShow:(value:boolean)=>void,
}

const inHouseCardContext = React.createContext<values>({
  setShow: (value) => null,
  id: "",
  titulo: "",
  descripcion: "",
  imagen: "",
  color: "",
  icono: "",
  asesores: [
    {
      nombre: "",
      descripcion: "",
      profesion: "",
      telefono: "",
      telefono_2: "",
      avatar: "",
    },
  ],
});

export default inHouseCardContext