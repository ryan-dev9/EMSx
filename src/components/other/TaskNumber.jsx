import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='mt-5 flex justify-between gap-5'>
        <div className='rounded-xl bg-[#458BE3] px-9 py-6 w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.newTask}</h2>
            <h3 className='text-3xl font-medium'>New Task</h3>
        </div>

        <div className='rounded-xl bg-green-400 px-9 py-6 w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.completed}</h2>
            <h3 className='text-3xl font-medium'>Completed</h3>
        </div>

        <div className='rounded-xl bg-yellow-300 px-9 py-6 w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.active}</h2>
            <h3 className='text-3xl font-medium'>Accepted</h3>
        </div>

        <div className='rounded-xl bg-purple-500 px-9 py-6 w-[45%]'>
            <h2 className='text-5xl font-semibold'>{data.taskStats.failed}</h2>
            <h3 className='text-3xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskNumber