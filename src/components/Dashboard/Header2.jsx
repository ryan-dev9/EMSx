import React from 'react'

const Header2 = () => {
  return (
    <header className='absolute top-0 left-0 flex bg-transparent  w-screen h-[45px]'>
        <nav>
            <ul className='w-screen h-full  flex justify-end gap-5 items-center'>
                <li className='text-xl cursor-pointer'>
                  <a href="/contact">Contact me</a>
                </li>
                <li className='text-xl mr-5 cursor-pointer'>
                  <a href="/services">Services</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header2