import React from 'react';
import Head from 'next/head'
import MainLayout from '@components/Layout';
import { NextPageWithLayout, ThemeProps } from '@typing';
import { ContactPage } from '@components/index'

const Contact: NextPageWithLayout = () => {
   return (
      <div>
         <Head>
            <title>Portfolio | Contact</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <ContactPage/>
      </div>
   );
};
Contact.Layout = MainLayout;
export default Contact;
