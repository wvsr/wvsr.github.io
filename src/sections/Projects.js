import React from 'react'
import CoinBase from '../../public/projects/coinbase.png'
import Fahad from '../../public/projects/fahad.png'
import MovieBase from '../../public/projects/moviebase.png'
import Shop from '../../public/projects/shop.png'
import Image from 'next/image'

function Projects() {
  const ImageBox = ({ img }) => {
    return (
      <div class='container relative'>
        <Image
          data-aos='fade-up'
          src={img}
          width={1500}
          height={1000}
          className='rounded-md'
        />
        <div class='overlay absolute inset-0 bg-[#000000a3] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md'>
          <div class='text text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            Hello World
          </div>
        </div>
      </div>
    )
  }
  return (
    <section className='project'>
      <div className='container lg:mx-auto px-3 md:px-6 m-auto max-w-screen-lg'>
        <h2 className='text-2xl lg:text-3xl uppercase text-center font-medium my-8 text-gray-700'>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <ImageBox img={MovieBase} />
          <ImageBox img={Fahad} />
          <ImageBox img={CoinBase} />
          <ImageBox img={Shop} />
        </div>
      </div>
    </section>
  )
}

export default Projects
