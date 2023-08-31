import apiurl from "@/types/apiUrl";

export default function gettingUrl(type:apiurl,tag:string="")
{

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
            return 'https://aula.desarrolloglobal.pe/v03/api/cursos/envivo/'+tag
        }
        case 'geo':
        {
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
        case 'seminarios':
        {
           return `https://aula.desarrolloglobal.pe/v03/api/seminarios/${id}${limit}?offset=0` 
        }
  
        default: return ''
    }
}