import apiurl from "@/types/apiUrl";

export default function gettingUrl(type:apiurl,tag:string="")
{
    const url ='https://aula.desarrolloglobal.pe/v03/api/'

    switch(type)
    {
        case 'diplomas':
        {
          return `${url}diplomas/${tag}`;   
        }
        case 'cursos':
        {
          return `${url}cursos/${tag}` 
        }
        case 'diplomados':
        {
          return `${url}diplomados/${tag}`;
        }
        case 'login':
        {
          return `${url}sesiones/login`
        }
        case 'validation':
        {
          return `${url}sesiones/verificar`
        }
        case 'logout':
        {
          return `${url}sesiones/logout`
        }
        case 'signUp':
        {
          return `${url}sesiones/registrar`;
        }
        case 'inHouse':
        {
          return `${url}inhouses`;
        }
        case 'setProspectos':
        {
          return `${url}/inhouse/setProspecto`;
        }

        default: return 'https://aula.desarrolloglobal.pe/v03/api/cursos/'
    }
}