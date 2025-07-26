import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState('')

  const submiteHandler = (e) => {
      e.preventDefault()
      
      setNewTask({title, description, date, category, newTask:true, active:false, completed:false, failed:true })

      const data = userData

      data.forEach(function(elem){
        if(assignTo == elem.firstName){
          elem.tasks.push(newTask)
          console.log(elem)
          elem.taskStats.newTask =  elem.taskStats.newTask+1
        }
      })
      setUserData(data)
      console.log(data)

      setAssignTo('')
      setCategory('')
      setDate('')
      setDescription('')
      setTitle('')

  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded-xl'>
        <form onSubmit={(e)=> {submiteHandler(e)}} className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2'>
            <div>
              <h3 className='text-xl text-gray-300 mb-0.5'>Task Title</h3>
              
              <input 
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              className='text-[17px] mb-4 font-semibold  py-1.5 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make UI Design etc.'/>
            </div>
            <div>
              <h3 className='text-xl text-gray-300 mb-0.5'>Date</h3>
              <input 
              value={date}
              onChange={(e)=>{setDate(e.target.value)}}
               className='w-4/5 rounded px-1.5 py-1 text-[17px] border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div>
              <h3 className='text-xl text-gray-300 mb-0.5'>Asign to</h3>
              <input 
              value={assignTo}
              onChange={(e)=>{setAssignTo(e.target.value)}}
               className='w-4/5 rounded px-1.5 py-1 border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
            </div>
            <div>
              <h3 className='text-xl text-gray-300 mb-0.5'>Category</h3>
              <input 
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
               className='w-4/5 rounded px-1.5 py-1 border-[1px] border-gray-400' type="text" placeholder='design, dev, etc.'/>
            </div>
          </div>

          <div className='w-2/5 flex flex-col items-start'>
             <h3 className='text-xl text-gray-300 mb-0.5'>Description</h3>
             <textarea 
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
               className='w-full h-44 mb-5.5 text-[17px] font-semibold py-2 px-4 rounded-xl outline-none bg-transparent border-[1px] border-gray-400' name="" id="" placeholder='Enter description'></textarea>
             <button className='bg-blue-600 py-2 px-5 hover:bg-blue-500 rounded-xl text-[20px] font-light mt-4 w-full'>Create Task</button>
          </div>
        

        </form>
      </div>
  )
}

export default CreateTask