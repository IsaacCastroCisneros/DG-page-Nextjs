import axios from "axios";
import gettingUrl from "./gettingUrl";
import apiurl from "@/types/apiUrl";


export default async function getRequest(apiUrl:apiurl,tag:string="")
{
  const url = gettingUrl(apiUrl,tag)

   try
   {
     const data =(await axios.get(url)).data
     return {res:data,err:false}
   }
   catch(err:any)
   {
     return{res:[],err}
   }
}
