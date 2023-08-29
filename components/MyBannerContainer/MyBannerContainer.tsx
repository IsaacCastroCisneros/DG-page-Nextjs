import React, { ReactNode } from 'react'

export const MyBannerContainer = ({children,styles}:{children:ReactNode,styles?:string}) => {
  return (
    <div className={styles}>
      <article className="container block !pt-[4rem]">{children}</article>
    </div>
  );
}
