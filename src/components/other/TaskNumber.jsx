import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='mt-5 ml-0 pl-0 flex flex-wrap sm:flex-nowrap justify-evenly gap-2 sm:gap-5'>
        <div className='rounded-xl bg-black border-1 border-blue-500 px-9 py-6 sm:mb-0 mb-2 sm:w-[45%] w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.newTask}</h2>
            <h3 className='text-3xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl bg-black border-1 border-green-400 px-9 py-6 sm:mb-0 mb-2 sm:w-[45%] w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.completed}</h2>
            <h3 className='text-3xl font-medium'>Compl.</h3>
        </div>

        <div className='rounded-xl bg-black border-1 border-yellow-400 px-9 py-6 sm:w-[45%] w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.active}</h2>
            <h3 className='text-3xl font-medium'>Accep.</h3>
        </div>

        <div className='rounded-xl bg-black border-1 border-purple-500 px-9 py-6 sm:w-[45%] w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.failed}</h2>
            <h3 className='text-3xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskNumber