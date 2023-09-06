import {Navbar} from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import {Footer} from '@/components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GlobalContext } from '@/context/GlobalContext';
import { TheMsg, MobCart,MobNoti } from ".";
import getRequest from '@/helpers/getRequest';
import Script from 'next/script';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  const{res:resC,err:errC}=await getRequest('cursos')
  const{res:resD,err:errD}=await getRequest('diplomas')

  const{envivo:cursos}=resC
  const{envivo:diplomas}=resD

  return (
    <html lang="es">
      <Script src="//code.jivosite.com/widget/5kqbbZ9lmq" async />
      <Script src="//code.jivosite.com/widget/5kqbbZ9lmq" async />
      <Script src="//code.tidio.co/t0h64oj6c2cfkny7omjodxcxdvv9gyv3.js" async />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V810B1M8GG"
      />
      <GlobalContext
        cursos={errC ? [] : cursos}
        diplomas={errD ? [] : diplomas}
      >
        <body>
          <TheMsg />
          <MobCart />
          <MobNoti />
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </body>
      </GlobalContext>
    </html>
  );
}
