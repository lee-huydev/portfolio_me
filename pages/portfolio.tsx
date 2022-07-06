import MainLayout from '@components/Layout';
import { NextPageWithLayout } from '@typing';
import React from 'react';

type Props = {};

const Portfolio: NextPageWithLayout = (props: Props) => {
   return <div className="text-white">This is portfolio</div>;
};
Portfolio.Layout = MainLayout;
export default Portfolio;
