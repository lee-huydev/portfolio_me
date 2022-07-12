import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import 'aos/dist/aos.css';
import { AppPropsWithLayout } from '@typing';
import { EmtyLayout } from '@components/index';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const [darkMode, setDarkMode] = useState<boolean>(true)
   let mode = darkMode ? "dark" : "light"
   useEffect(() => {
      Aos.init({
         initClassName: 'aos-init',
         animatedClassName: 'aos-animate',
         easing: 'ease-in-out',
         duration: 1000,
      });
      document.body.setAttribute('data-theme', `${mode}`);
   }, [mode]);
   const Layout = Component.Layout ?? EmtyLayout;
   return (
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
