import { useEffect } from 'react'
import '@/styles/globals.css'
import Header from '@/sections/Header'
import Footer from '@/sections/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
