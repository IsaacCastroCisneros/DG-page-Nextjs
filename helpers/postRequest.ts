import apiurl from "@/types/apiUrl"
import gettingUrl from "./gettingUrl"

export default async function postRequest(type:apiurl,data:FormData)
{
  const url =gettingUrl(type)

  try
  {
    const res = await fetch(url, 
    {
      method: "POST",
      body: data,
    })

    const resData = await res.json()
    return { res: resData, values: data,err:false }; 
  }
  catch(err)
  {
    return { res:null, values: data,err }; 
  }
}

