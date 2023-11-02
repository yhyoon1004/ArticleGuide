import './globals.css'
import {Inter} from 'next/font/google'
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import {Paper} from "@mui/material";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Article Guide',
    description: 'Make article like newshawk',
}

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
