import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Wasimul Sami',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={merriweather.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto w-[750px] max-w-full px-5 pb-5 pt-10 text-text dark:text-darkText">
            <Nav />
            {children}
          <div className="mt-10 text-xs text-center text-gray-500 dark:text-gray-400">
            © 2025 Wasimul Sami. All rights reserved. (Mostly.)
          </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
