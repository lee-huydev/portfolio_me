import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { all, cssJs, nextTailwind, resApi, scssNext } from './constant';

export interface NavProps {
   href: string;
   exact: boolean;
   children: ReactElement;
   className: string;
}

export interface ThemeProps {
   bg: string;
}
export interface PortItem {
   id: number;
   name: string;
   image: string[];
   link: string;
   type: string;
   content: string;
   feature: string;
   create: string;
   fe: string;
   be: string;
}
export interface LayoutProps {
   children?: JSX.Element;
   theme: ThemeProps;
}

export interface Modals {
   data: PortItem | null;
   status: boolean;
}
export interface DataRender {
   data: PortItem[];
   filter: {
      type: string;
   };
   filters: any;
}

export type NextPageWithLayout = NextPage & {
   Layout?: (props: LayoutProps) => JSX.Element;
};

export type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};
