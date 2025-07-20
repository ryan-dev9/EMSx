import React, {useState} from 'react'
import Header2 from '../Dashboard/Header2'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submiteHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen items-center justify-center'>
        <Header2 />
            <h1 id='heading' className='absolute top-25 font-medium font-sans text-9xl'>REMS</h1>
        <div className='relative top-10 border-2 h-[170px] w-[250px] flex justify-center scale-170 rounded-xl border-blue-600'>
            <form onSubmit={(e) => {submiteHandler(e)}} className='flex flex-col items-center justify-center'>

                <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='border-1 border-blue-600 py-0.5 rounded-[7px] px-2' type="email" placeholder='Email'/>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}}required className='border-1 border-blue-600 py-0.5 rounded-[7px] px-2 mt-3' type="password" placeholder='Password'/>
                <button className='flex justify-center items-center bg-blue-600 mt-5 text-white w-[190px] h-[30px] rounded-[7px] text-[20px]'>Log in</button>

            </form>
        </div>
    </div>
  )
}

export default Login