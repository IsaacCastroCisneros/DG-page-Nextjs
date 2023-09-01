import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types"
import getRequest from "./getRequest"
import apiurl from "@/types/apiUrl"
import { Metadata } from "next"

export default async function getMetadata(params:any,type:apiurl):Promise<Metadata>
{
   const{name}=params
   const {res:data} = await getRequest(type,name)
   
   const{titulo,descripcion,tags}=data.nuevo_seos

   const seo: OpenGraph = {
     title: titulo,
     description: descripcion,
   };

   return {
     ...seo,
     keywords: tags,
     openGraph: { ...seo, images: data.imagen },
   };
}