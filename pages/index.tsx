import { MainLayout, HomePage } from '@components/index';
import { NextPageWithLayout, ThemeProps } from '@typing';
import Head from 'next/head';
interface Props {
   theme?: ThemeProps;
}

const Home: NextPageWithLayout = ({ theme }: Props) => {
   return (
      <div>
         <Head>
            <title>Portfolio | Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <HomePage />
      </div>
   );
};
Home.Layout = MainLayout;
export default Home;
