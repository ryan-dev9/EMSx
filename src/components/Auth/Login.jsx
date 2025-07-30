import React, {useState} from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submiteHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    // screen
    // Heading REMS
    // Login Box
    // form onSubmit={(e) => {submiteHandler(e)}}
    // email input value={email} onChange={(e) => {setEmail(e.target.value)}}
    // password input value={password} onChange={(e) => {setPassword(e.target.value)}}required
    // Login Button

  return (
   <div className='h-screen flex justify-center bg-black'>
        <h1 className='absolute top-[20%] sm:top-25 text-8xl sm:text-9xl text-black font-[orbitron] font-semibold'>REMS</h1>

        <div className='w-full h-full  flex absolute sm:relative top-[10%] sm:items-center justify-center'>
           <form onSubmit={(e) => {submiteHandler(e)}} id='login-form' className='absolute top-65 w-[90%] sm:w-[470px] h-[250px] flex flex-col justify-center items-center bg-white/5 rounded-xl'>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='w-[90%] h-[40px] bg-black mb-5 py-5 px-3 border-2 text-2xl border-white/20 rounded-[8px]' type="email" placeholder='Email'/>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} required className='w-[90%] h-[40px] bg-black py-5 px-3 border-2 text-2xl border-white/20 rounded-[8px]' type="password" placeholder='password'/>
                
                <button className='mt-8 w-[50%] h-[45px] border-2 border-blue-600 flex justify-center items-center py-6 text-3xl bg-black rounded-xl'>Login</button>
           </form>
        </div>
   </div>
  )
}

export default Login