import React, { use, useState } from 'react'

const Header = (props) => {
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
 // window.location.reload();
  }
  
  return (
    <div className='flex justify-between items-end'>
        
        <h1 className='text-3xl font-medium'>Hello, <br /> <span className='text-5xl font-semibold font-[orbitron]'>data</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-5 py-2 text-lg font-medium rounded-xl'>Log out</button>
    </div>
  )
}

export default Header