import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import Headroom from 'react-headroom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <Headroom>
      <header className='flex justify-between items-center py-2.5 px-6 bg-[#fffffff3] shadow-md'>
        <h1 className='text-xl font-medium'>sami.</h1>

        <nav className='hidden md:block space-x-6'>
          <Link href=''>
            <span className='text-gray-500 hover:text-gray-700'>About</span>
          </Link>
          <Link href=''>
            <span className='text-gray-500 hover:text-gray-700'>Services</span>
          </Link>
          <Link href=''>
            <span className='text-gray-500 hover:text-gray-700'>Project</span>
          </Link>
          <Link href=''>
            <span className='btn-success'>Hire me</span>
          </Link>
        </nav>

        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-gray-500 hover:text-gray-700 focus:outline-none'
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-white shadow-lg'>
          <nav className='flex flex-col items-center space-y-4 py-4'>
            <Link href=''>
              <span className='text-gray-500 hover:text-gray-700'>About</span>
            </Link>
            <Link href=''>
              <span className='text-gray-500 hover:text-gray-700'>
                Services
              </span>
            </Link>
            <Link href=''>
              <span className='text-gray-500 hover:text-gray-700'>Project</span>
            </Link>
            <Link href='btn-success'>
              <span>Hire me</span>
            </Link>
          </nav>
        </div>
      )}
    </Headroom>
  )
}

export default Header
