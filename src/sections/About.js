import React from 'react'
import Profile from '@/../public/sami_about.jpg'
import Image from 'next/image'
function About() {
  return (
    <section className='about'>
      <div className='container lg:mx-auto px-4 md:px-6 m-auto max-w-screen-lg py-24'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-2xl lg:text-3xl uppercase text-center font-medium my-8 text-gray-700'>
            About Me
          </h2>
          <div className='mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            <div
              className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'
              data-aos='fade-right'
            >
              <Image
                className='rounded-3xl hover:filter hover:grayscale transition-all duration-150 transform hover:scale-105'
                src={Profile}
                width={679}
                height={667}
                alt='Profile'
              />
            </div>
            <div
              className='col-span-1 md:col-span-2 lg:col-span-2 px-3'
              data-aos='fade-up'
            >
              <p className='text-lg font-md text-gray-800 max-w-2xl'>
                Hi, I'm John Doe. I'm a web developer with 5 years of experience
                in creating web applications using React and Node.js. I'm
                passionate about building responsive and scalable web
                applications that solve real-world problems. In my free time, I
                like to read books and explore new technologies.
              </p>

              <button className='btn-success mt-8'>
                <span className='mx-4'>Hire me</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
