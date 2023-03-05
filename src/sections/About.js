import React from 'react'
import Profile from '@/../public/images/sami_about.jpg'
import Image from 'next/image'
function About() {
  return (
    <section className='about' data-aos='fade-right' id='about'>
      <div className='container lg:mx-auto px-4 md:px-6 m-auto max-w-screen-lg py-24'>
        <h2 className='text-2xl lg:text-3xl uppercase font-bold text-center my-8 text-gray-700'>
          About Me
        </h2>
        <div className='max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-1 md:col-span-2 lg:col-span-1 flex justify-center'>
            <Image
              className='rounded-3xl hover:filter hover:grayscale transition-all duration-150 transform hover:scale-105'
              src={Profile}
              width={679}
              height={667}
              alt='Profile'
            />
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-2 px-3'>
            <p className='text-lg font-md text-gray-800 max-w-2xl'>
              {`I am a Full stack Web Developer building the Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people. With my experience as a Web Developer, I've learned to build web applications from scratch as well as maintain existing applications. My skills are not just limited to programming, but I also know how to deal with graphic design, digital marketing, and user experience design. Do you need help developing your next product or project? Get in touch with me and let's discuss your requirements! Contact me now for any web development needs you have!`}
            </p>
            <button className='btn-success mt-8'>
              <span className='mx-4'>Hire me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
