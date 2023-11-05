// import './globals.css'
import {Inter} from 'next/font/google'
import Script from "next/script";
import'./template.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Article Guide',
    description: 'Be The Journalist',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <title>Article Guide</title>
            <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet"/>
            <link href="css/styles.css" rel="stylesheet"/>
            <Script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></Script>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
