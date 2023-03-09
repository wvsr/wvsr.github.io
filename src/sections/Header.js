import { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import Headroom from 'react-headroom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [previousOverflow, setPreviousOverflow] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const menuLinks = [
    {
      text: 'About',
      url: '#about',
    },
    {
      text: 'Project',
      url: '#project',
    },
  ]

  useEffect(() => {
    if (isMenuOpen) {
      // Save the previous overflow value
      setPreviousOverflow(document.body.style.overflow)
      // Disable scrolling on the body element
      document.body.style.overflow = 'hidden'
    } else {
      // Restore the previous overflow value
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  return (
    <Headroom>
      <header className='flex justify-between items-center py-2.5 px-6 bg-[#fffffff3] shadow-md z-50'>
        <h1 className='text-xl select-none font-bold'>sami.</h1>

        <nav className='hidden md:block space-x-6'>
          {menuLinks.map((item) => {
            return (
              <Link href={item.url} key={item.url}>
                <span className='text-gray-500 hover:text-gray-700'>
                  {item.text}
                </span>
              </Link>
            )
          })}
          <Link href=''>
            <span className='btn-success'>Hire me</span>
          </Link>
        </nav>

        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-gray-500 hover:text-gray-700 focus:outline-none px-4'
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full px-4 animate-menu-slide-in'>
          <nav className='flex flex-col items-center space-y-4 py-4 bg-white shadow-lg w-full'>
            {menuLinks.map((item) => {
              return (
                <Link href={item.url} onClick={toggleMenu} key={item.url}>
                  <span className='text-gray-500 hover:text-gray-700'>
                    {item.text}
                  </span>
                </Link>
              )
            })}
            <a
              href='https://www.fiverr.com/wasimulvari'
              className='btn-success'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </Headroom>
  )
}

export default Header
