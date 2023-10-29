import './globals.css'
import { Inter } from 'next/font/google'
import Grid from "@mui/system/Unstable_Grid";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Article Guide',
  description: 'Make article like newshawk',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Grid container spacing={2}>
         <Grid item md={12}>
            <div>HELLO</div>
         </Grid>


                {children}
        </Grid>

        </body>
        </html>
    );
}
