import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className='hero'>
      <div
        data-aos='fade-up'
        className='py-16 md:pt-14 container lg:mx-auto px-4 md:px-14 max-w-screen-lg'
      >
        <h1 class='text-4xl md:text-6xl leading-[1.2] text-gray-900 font-[500]'>
          Hi, {`I'm`} Wasimul Sami, <br /> A full stack developer.
        </h1>
        <p class='py-6 max-w-3xl text-base sm:text-lg text-gray-600 mr-8'>
          {`I offer freelance web development services using the MERN stack, building cutting-edge web solutions that help businesses grow and succeed.`}
        </p>

        <div className='py-6 space-x-6'>
          <a
            href='https://github.com/wvsr/wvsr.github.io/raw/main/public/resume.pdf'
            className='btn-primary text-lg'
            target='_blank'
            rel='noopener noreferrer'
          >
            Get Resume
          </a>
          <a
            href='https://www.fiverr.com/wasimulvari'
            className='btn-secondary'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
