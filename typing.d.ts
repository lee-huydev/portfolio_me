import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement } from "react"

export interface NavProps {
    href: string,
    exact: boolean,
    children: ReactElement,
    className: string,
}

export interface LayoutProps {
    children?: ReactElement
}

export type NextPageWithLayout = NextPage & {
    Layout?:(props: LayoutProps) => ReactElement 
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}