import MainLayout from '@components/Layout';
import { NextPageWithLayout, ThemeProps } from '@typing';
import React from 'react';

const Contact: NextPageWithLayout = () => {
   return <div className="text-white">Contact</div>;
};
Contact.Layout = MainLayout;
export default Contact;
