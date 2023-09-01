import getRequest from "@/helpers/getRequest"

export default async function sitemap()
{
    const url = "https://www.desarrolloglobal.pe/"

    const {res:cursos}:any = await getRequest('cursos')
    const {res:diplomas}:any = await getRequest('diplomas')
    const {res:diplomados}:any = await getRequest('diplomados')


    const data = [
      ...cursos.envivo,
      ...diplomas.envivo,
      ...diplomados.envivo,
    ].map((dat) =>(
        {
           url:`${url}${dat.tipo}s/${dat.etiqueta}`,
           lastModified:new Date()
        }
    ));

    return[...data]
}