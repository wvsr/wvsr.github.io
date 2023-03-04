import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <div
        data-aos='fade-up'
        className='py-16 container lg:mx-auto px-3 md:px-14 max-w-screen-lg'
      >
        <h1 class='text-4xl md:text-6xl font-medium leading-[1.2] text-gray-800'>
          Hi, I'm Wasimul Sami, <br /> A full stack developer.
        </h1>
        <p class='py-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-700 mr-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore
          quo quod deserunt consequuntur saepe, repudiandae veritatis mollitia
          dicta distinctio eos facilis debitis corporis neque error voluptates
          amet pariatur eius!
        </p>

        <div className='py-6 space-x-6'>
          <button className='btn-primary text-lg'>Get Resume</button>
          <button className='btn-secondary'>About me</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
