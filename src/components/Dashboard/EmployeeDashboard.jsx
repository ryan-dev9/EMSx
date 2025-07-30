import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  
  console.log(props)
  return (
    <div className='p-2.5 sm:p-10 bg-[#010409] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumber  data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard