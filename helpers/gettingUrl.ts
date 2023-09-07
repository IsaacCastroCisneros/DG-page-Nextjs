import apiurl from "@/types/apiUrl";

interface props
{
  type:apiurl
  tag?:string
  prospecto?:boolean
  id?:string
  limit?:string
}

export default function gettingUrl(params:props)
{
    const{type,tag="",prospecto=false,id="",limit=""}=params

    const url ="https://aula.desarrolloglobal.pe/v03/api/"

    switch(type)
    {
      case 'modal':
        {
            return 'https://aula.desarrolloglobal.pe/v03/api/modal/envivo'
        }
        case 'diplomas':
        {
            return 'https://aula.desarrolloglobal.pe/v03/api/diplomas/envivo/'+tag 
        }
        case 'cursos':
        {
            if(prospecto)
            {
               return `https://aula.desarrolloglobal.pe/v03/api/${type}/setProspecto` 
            }
            return 'https://aula.desarrolloglobal.pe/v03/api/cursos/envivo/'+tag
        }
        case 'geo':
        {
            if(prospecto)
            {
               return `https://aula.desarrolloglobal.pe/v03/api/${type}/setProspecto` 
            }
            return 'https://ipgeolocation.abstractapi.com/v1/?api_key=5439d75ced19410c865a3d67a41f04d6'
        }
        case 'diplomados':
        {
            return 'https://aula.desarrolloglobal.pe/v03/api/diplomados/envivo/'+tag
        }
        case 'inHouse':
        {
           return 'https://aula.desarrolloglobal.pe/v03/api/inhouses'
        }
        case 'login':
            {
              return `${url}sesiones/login`
            }
            case 'validation':
            {
              return `${url}sesiones/verificar`;
            }
            case 'logout':
            {
              return `${url}sesiones/logout`;
            }
            case 'signUp':
            {
              return `${url}sesiones/registrar`;
            }
        case 'seminarios':
        {
           return `https://aula.desarrolloglobal.pe/v03/api/seminarios/${id}${limit}?offset=0` 
        }
  
        default: return ''
    }
}