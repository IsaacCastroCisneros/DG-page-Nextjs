import {Navbar} from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import {Footer} from '@/components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GlobalContext } from '@/context/GlobalContext';
import { TheMsg, MobCart,MobNoti } from ".";
import getRequest from '@/helpers/getRequest';

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
    <html lang="en">
      <GlobalContext
        cursos={errC ? []:cursos}
        diplomas={errD ? []:diplomas}
        >
        <body>
          <TheMsg/>
          <MobCart/>
          <MobNoti/>
          <header>
            <Navbar/>
          </header>
       {/*    <main>{children}</main> */}
          <Footer />
        </body>
      </GlobalContext>
    </html>
  );
}
