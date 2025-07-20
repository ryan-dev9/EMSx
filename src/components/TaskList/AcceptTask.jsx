import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data.title)
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 font-semibold px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-xl font-semibold'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>
            <p id='p1' className='text-xl font-semibold mt-4'>
                {data.description}
            </p>
            <div className='mt-4 w-full flex justify-around'>
                <button id='btn' className='px-3.5 py-1.5 bg-blue-600 rounded text-[18px]'>Accept</button>
                <button id='btn' className='px-3.5 py-1.5  bg-red-600 rounded text-[18px]'>Reject</button>
            </div>
        </div>
  )
}

export default AcceptTask