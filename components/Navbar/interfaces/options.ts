import React from "react";

export default interface options
{
  label:string,
  href?:string,
  onClick?:(e:any)=>void,
  icon?:React.ReactNode,
}