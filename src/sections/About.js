import React from 'react'
import Profile from '@/../public/images/sami_about.jpg'
import Image from 'next/image'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
function About() {
  return (
    <section className='about' id='about'>
      <div className='container lg:mx-auto px-4 md:px-6 m-auto max-w-screen-lg pt-12 pb-24'>
        <h2 className='text-2xl lg:text-3xl uppercase font-bold text-center my-8 text-gray-700'>
          About Me
        </h2>
        <div className='max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-1 md:col-span-2 lg:col-span-1 flex justify-center'>
            <div>
              <Image
                className='rounded-3xl hover:filter hover:grayscale transition-all duration-150 transform hover:scale-105'
                src={Profile}
                width={679}
                height={667}
                alt='Profile'
              />
            </div>
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-2 px-3'>
            <p className='text-base  text-gray-700 max-w-2xl'>
              {`I am a Full stack Web Developer building the Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people. With my experience as a Web Developer, I've learned to build web applications from scratch as well as maintain existing applications. My skills are not just limited to programming, but I also know how to deal with graphic design, digital marketing, and user experience design. Do you need help developing your next product or project? Get in touch with me and let's discuss your requirements! Contact me now for any web development needs you have!`}
            </p>
            <div
              className='py-8 grid grid-cols-1 sm:grid-cols-2 gap-4'
              data-aos='fade-right'
            >
              <div className=' flex gap-3'>
                <div className='bg-success rounded-full py-4 px-5 text-2xl text-white hover:scale-95'>
                  <MdOutlineWorkOutline />
                </div>
                <div className='py-2'>
                  <p className='text-lg font-bold'>2+ year</p>
                  <p className='text-sm text-gray-600'>Experience</p>
                </div>
              </div>
              <div className=' flex gap-3'>
                <div className='bg-success rounded-full py-4 px-5 text-2xl text-white hover:scale-95'>
                  <AiOutlineFundProjectionScreen />
                </div>
                <div className='py-2'>
                  <p className='text-lg font-bold'>10+ project</p>
                  <p className='text-sm text-gray-600'>Compleated</p>
                </div>
              </div>
              <div className=' flex gap-3'>
                <div className='bg-success rounded-full py-4 px-5 text-2xl text-white hover:scale-95'>
                  <AiOutlineFundProjectionScreen />
                </div>
                <div className='py-2'>
                  <p className='text-lg font-bold'>5000+ hours</p>
                  <p className='text-sm text-gray-600'>Of coding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
