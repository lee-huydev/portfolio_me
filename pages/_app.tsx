import { useEffect } from 'react';
import Aos from 'aos';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import 'aos/dist/aos.css';
import { AppPropsWithLayout } from '@typing';
import { EmtyLayout } from '@components/index';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   console.log('app re-render');
   useEffect(() => {
      Aos.init({
         initClassName: 'aos-init',
         animatedClassName: 'aos-animate',
         easing: 'ease-in-out',
         duration: 1000,
      });
   }, []);
   const Layout = Component.Layout ?? EmtyLayout;
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
