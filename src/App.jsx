import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {

    const [user, setUser] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    const [userData, setUserData] = useContext(AuthContext)
    
    useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData)
      }}, [])
    

      const handleLogin = (email,password) => {
        if(email == 'anjali@e.com' && password == '123'){
            setUser('admin')
            localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
        } 

        else if(userData){
          const employee = userData.find((e) => email == e.email && e.password == password)
          if(employee){
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
            window.location.reload()
          }
        } 
        else{ alert("Invalid Credentials")} 
      }

  
      console.log(userData)

    return (
     <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={userData}/> : ''}
      {user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData.data}/> : ''}
      <Analytics />
      <SpeedInsights />
    </>
);


}

export default App;