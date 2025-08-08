import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex items-center justify-start  overflow-x-auto gap-5 h-[53%] w-full rounded-xl py-5 mt-5 sm:mt-10'>
        {data.tasks.map((elem, idx)=>{
          if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
          }
          if(elem.completed){
            return <CompleteTask key={idx} data={elem} />
          }
          if(elem.failed){
            return <FailedTask key={idx} data={elem} />
          }
          if(elem.newTask){
            return <NewTask key={idx} data={elem} />
          }
          })}
    
    </div>
  )
}

export default TaskList