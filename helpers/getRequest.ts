import axios from "axios";
import gettingUrl from "./gettingUrl";
import apiurl from "@/types/apiUrl";

export default async function getRequest(type:apiurl,tag:string="",id:string="",limit:string="")
{
  const url = gettingUrl({type,tag,id,limit})

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
