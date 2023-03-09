import { useEffect } from 'react'
import '@/styles/globals.css'
import Header from '@/sections/Header'
import Footer from '@/sections/Footer'
import Head from 'next/head'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap'
          rel='stylesheet'
        />
        <title>Wasimul Sami | Full stack develooper</title>
        <meta
          name='description'
          content={`I'm Wasimul Sami, a MERN stack developer based in Kishoreganj Bajitpur, Bangladesh. I have a passion for learning cutting-edge technologies and constantly improving my skills. I also do freelance work, so if you're looking for a reliable and skilled developer, I'm the one you can count on. My areas of expertise include JavaScript, HTML, CSS, Python, React, Next.js, MERN stack, Tailwind CSS, and Bootstrap. Feel free to explore my portfolio and get in touch if you have any questions or project inquiries!`}
        />
        <meta
          property='og:title'
          content='Wasimul Sami | Developer Portfolio'
        />
        <meta
          name='keywords'
          content='wasimul sami, sami, wasimul vari sami, web developer, full-stack developer'
        />
        <meta
          property='og:description'
          content='This is a description of my page.'
        />
        <meta property='og:image' content='./poster_sami.jpg' />
        <meta property='og:url' content='https://wvsr.github.io/' />
        <meta
          name='twitter:title'
          content='Wasimul Sami | Web Developer based in bangladesh'
        />
        <meta name='twitter:image' content='./poster_sami.jpg' />
        <meta name='twitter:card' content='./poster_sami.jpg' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <GoogleAnalytics trackPageViews />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
