import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full border-1 border-green-400 sm:w-[300px] w-[85%] p-5 bg-black rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 px-3 py-1 font-semibold rounded'>{data.category}</h3>
                <h4 className='text-xl font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>
            <p className='text-xl font-medium mt-4'>{data.description}</p>
            <div className='mt-2 w-full flex justify-center'>
                <button id='btn' className='px-3 py-1.5 font-medium text-xl rounded bg-green-400'>Accept</button>
            </div>
        </div>
  )
}

export default NewTask