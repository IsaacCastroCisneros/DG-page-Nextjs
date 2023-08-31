import { ReactNode } from "react";

export const Slick=({bg,children}:{bg:string,children?:ReactNode})=>
{
    return (
      <section
        className="w-[100%] h-[448px] block"
        style={{ backgroundImage: `url(${bg})`,backgroundRepeat:'none',backgroundSize:'cover' }}
      >
       {children}
      </section>
    );
}