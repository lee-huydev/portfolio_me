import React from 'react';
import { MainLayout } from '@components/index';
import { NextPageWithLayout } from '@typing';
type Props = {};

const About: NextPageWithLayout = (props: Props) => {
   return <div className="text-white">About</div>;
};
About.Layout = MainLayout
export default About;
