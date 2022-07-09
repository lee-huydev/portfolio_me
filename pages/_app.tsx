import { useEffect } from 'react';
import Aos from 'aos';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import 'aos/dist/aos.css';
import { AppPropsWithLayout } from '@typing';
import { EmtyLayout } from '@components/index';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const theme = {
      bg: 'bg-zinc-900',
   };
   useEffect(() => {
      Aos.init({
         initClassName: 'aos-init',
         animatedClassName: 'aos-animate',
         easing: 'ease-in-out',
         duration: 1000,
      });
      document.body.setAttribute('data-theme', 'dark');
   }, []);
   const Layout = Component.Layout ?? EmtyLayout;
   return (
      <Layout theme={theme}>
         <Component theme={theme} {...pageProps} />
      </Layout>
   );
}

export default MyApp;
