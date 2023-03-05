import React from 'react'
import CoinBase from '../../public/images/projects/coinbase.png'
import Fahad from '../../public/images/projects/fahad.png'
import MovieBase from '../../public/images/projects/moviebase.png'
import Shop from '../../public/images/projects/shop.png'
import Image from 'next/image'
import { AiOutlineLink } from 'react-icons/ai'

const projects = [
  {
    title: 'crypto website',
    url: 'https://cryptobysami.netlify.app/',
    img: CoinBase,
  },
  {
    title: 'trending movie website',
    url: 'http://moviebysami.netlify.com/',
    img: MovieBase,
  },
  {
    title: 'eccomerce website',
    url: 'https://github.com/wvsr/mern-ecommerce-website',
    img: Shop,
  },
  { title: 'fahad hossain', url: 'https://fahad-sir.netlify.app/', img: Fahad },
]

function Projects() {
  const ImageBox = ({ img, url }) => {
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
            <a
              href={url}
              className='btn-success flex justify-center text-sm items-center gap-3'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Project <AiOutlineLink />
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section className='project' id='project'>
      <div className='container lg:mx-auto px-3 md:px-6 m-auto max-w-screen-lg'>
        <h2 className='text-2xl lg:text-3xl uppercase text-center font-medium my-8 text-gray-700'>
          Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {projects.map((project) => {
            return (
              <ImageBox img={project.img} url={project.url} key={project.url} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
