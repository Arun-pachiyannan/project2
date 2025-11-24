import React from 'react'
import navPng from '../../assets/ns-logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
const NavMenu = [
  {
    id:1,
    title: 'Home',
    link: '#'
  },
  {
    id:2,
    title: 'About',
    link: '#'
  },
  {
    id:3,
    title: 'Bikes',
    link: '#'
  },
  {
    id:4,
    title: 'Cars',
    link: '#'
  }
]

const Navbar = () => {
  return (
    <>
    <main className='pt-[15px] pb-1 text-white '>
    <div className='container'>
      <div className='flex justify-between items-center'>
        {/* logo Section  */}
        <div>
          <img src={navPng} alt="This is logo" className='w-[150px]'/>
        </div>
        {/* Menu Section  */}
        <div className='hidden md:block'>
          <ul className='flex gap-4'>
          {
          NavMenu.map((menu) =>(
            <div key={menu.id} className='inline-block'>
              <a
                href={menu.link}
                className="block px-6 py-2 uppercase rounded transform transition-all duration-700 ease-in-out hover:scale-[1.05] hover:bg-gradient-to-r from-red-500 to-gray-200/90 hover:text-white hover:shadow-[0_0_22px_8px_rgba(128,128,128,0.45)]"
              >{menu.title}</a>
            </div>
          ))
          }
          </ul>
        </div>
        <div className='flex items-center gap-6'>
        <div className='h-[30px] w-[30px] flex items-center justify-center cursor-pointer bg-black/30 rounded-full p-2 hover:scale-110 duration-200'>
          <GiHamburgerMenu/>
        </div>
        <div className='h-[30px] w-[30px] flex items-center justify-center cursor-pointer bg-black/30 rounded-full p-2 hover:scale-110 duration-200'>
          <FaSearch/>
        </div>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}

export default Navbar
