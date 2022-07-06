import MainLayout from '@components/Layout';
import { NextPageWithLayout } from '@typing';
import React from 'react';

type Props = {};

const Contact: NextPageWithLayout = (props: Props) => {
   return <div className="text-white">Contact</div>;
};
Contact.Layout = MainLayout
export default Contact;
