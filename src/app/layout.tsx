import type { Metadata } from 'next'
import { Overpass_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'

const overpass_mono = Overpass_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Wasimul Sami',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={overpass_mono.className}>
        <div className="mx-auto w-[750px] max-w-full px-5 pb-5 pt-10 text-text dark:text-darkText">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
