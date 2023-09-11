import {Navbar} from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import {Footer} from '@/components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GlobalContext } from '@/context/GlobalContext';
import { TheMsg, MobCart,MobNoti } from ".";
import getRequest from '@/helpers/getRequest';
import Script from 'next/script';
import { Metadata } from 'next';
import 'plyr/dist/plyr.css'

const title = "Centro de Capacitación y Desarrollo Global"
const description="12 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9001-2015."

export const metadata:Metadata=
{
  title,
  description,
  openGraph:
  {
    title,
    description
  },
  alternates:
  {
    canonical:"https://www.desarrolloglobal.pe/" ,
  }
}


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
      <Script src="https://api.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js"/>
      <Script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"/>
      <Script src="https://api.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js" />
      <MyScript/>
      <GlobalContext
        cursos={errC ? [] : cursos}
        diplomas={errD ? [] : diplomas}
      >
        <body>
          <TheMsg />
          <MobCart />
          <MobNoti />
          <header className='z-[9999] relative'>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </body>
      </GlobalContext>
    </html>
  );
}


function MyScript()
{
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-V810B1M8GG');`}
      </Script>
      <Script id='facebook-1'  strategy="afterInteractive">
        {
          `!function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
              n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '823953229049353');
          fbq('track', 'PageView');
      
          !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
              n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1620383184811449');
          fbq('track', 'PageView');`
          }
      </Script>
    {/*   <Script id='facebook-2' strategy="afterInteractive">
        {
          `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1620383184811449&ev=PageView&noscript=1" />`
        }
      </Script>
      <Script id='facebook-3' strategy="afterInteractive">
        {
          `
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=823953229049353&ev=PageView&noscript=1" />
          `
        }
      </Script> */}
      <Script id='stuff' strategy="afterInteractive">
        {
          `
          !function (w, d, t) { w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)ttq.setAndDefer(e, ttq.methods[n]); return e }, ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {}; var o = document.createElement("script"); o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a) }; ttq.load('CJ6H3J3C77U0073JKTEG'); ttq.page(); }(window, document, 'ttq'); 
          `
        }
      </Script>
      <Script id='more-stuff' strategy="afterInteractive">
         {
          `(function (h, o, t, j, a, r) {

            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
      
            h._hjSettings = { hjid: 3638118, hjsv: 6 };
      
            a = o.getElementsByTagName('head')[0];
      
            r = o.createElement('script'); r.async = 1;
      
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      
            a.appendChild(r);
      
          })(window, document, 'https://static.hotjar.com/c/hotjar-','.js?sv=');`
         }
      </Script>
    </>
  );
}