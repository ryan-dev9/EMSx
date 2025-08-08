import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    
  return (
    <div id='AllTasks' className='bg-[#1c1c1c] p-3 rounded mt-5'>

        <div className='bg-blue-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg'>Employee name</h2>
            <h3 className='w-1/5 text-lg'>New Task</h3>
            <h5 className='w-1/5 text-lg'>Active Task</h5>
            <h5 className='w-1/5 text-lg'>Completed</h5>
            <h5 className='w-1/5 text-lg'>Failed</h5>

        </div>


        <div>
        {userData.map(function(elem, idx){
            return <div key={idx} className='border-2 border-blue-600 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-lg'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg text-blue-500'>{elem.taskStats.newTask}</h3>
            <h5 className='w-1/5 text-lg text-yellow-300'>{elem.taskStats.active}</h5>
            <h5 className='w-1/5 text-lg text-green-400'>{elem.taskStats.completed}</h5>
            <h5 className='w-1/5 text-lg text-red-500'>{elem.taskStats.failed}</h5>
        </div>
        })}
        </div>

    </div>

  )
}

export default AllTask