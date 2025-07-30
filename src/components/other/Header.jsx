import React, { use, useState } from 'react'

const Header = (props) => {
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  // console.log(props.data.firstName)

  // <div className='flex justify-between items-end'>
        
  //       <h1 className='text-3xl font-medium'>Hello, <br /> <span className='text-5xl font-semibold font-sans'>{props.data.firstName ? props.data.firstName : "Anjali"} </span></h1>
  //       <button onClick={logOutUser} className='bg-red-600 px-5 py-2 text-lg font-medium rounded-xl'>Log out</button>
  //   </div>
  
  return (
    <div className='flex justify-between items-end'>
        
        <h1 className='text-3xl font-medium'>Hello, <br /> <span className='text-5xl font-semibold font-[orbitron]'>{props.data.firstName ? props.data.firstName : "Anjali"} </span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-5 py-2 text-lg font-medium rounded-xl'>Log out</button>
    </div>

  )
}

export default Header