import React, { useState } from 'react';
import Footer from '../other/Footer';
import { Info, X } from 'lucide-react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(true); // for demo credentials popup

  const submiteHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='h-screen flex justify-center bg-black relative'>
      {/* Dark Theme Credentials Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/0 bg-opacity-100 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 text-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:absolute sm:left-5 relative border border-zinc-700">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-4">
              <div className="mx-auto h-12 w-12 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
                <Info className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Demo Credentials</h3>
              <p className="text-sm text-gray-400 mt-1">Use these to test the login system</p>
            </div>

            <div className="bg-zinc-800 rounded-lg p-4 mb-4">
              <div className="text-center border-b border-zinc-700 pb-3 mb-3">
                <h4 className="font-semibold text-white">Global Password = 123</h4>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-300 mb-2">Email IDs :-</h5>
                  <div className="space-y-1 text-sm text-gray-400">
                    <p>1. sachin@e.com</p>
                    <p>2. ravi@e.com</p>
                    <p>3. priya@e.com</p>
                    <p>4. aman@e.com</p>
                    <p>5. neha@e.com</p>
                  </div>
                </div>

                <div className="border-t border-zinc-700 pt-3">
                  <h5 className="font-medium text-gray-300 mb-1">Admin ID :-</h5>
                  <p className="text-sm text-blue-400 font-medium sm:bold">anjali@e.com</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Got it! Let's Login
            </button>
          </div>
        </div>
      )}

      <h1 className='absolute top-[20%] sm:top-25 text-8xl sm:text-9xl text-black font-[orbitron] font-semibold'>REMS</h1>

      <div className='w-full h-full flex absolute sm:relative top-[10%] sm:items-center justify-center'>
        <form onSubmit={(e) => { submiteHandler(e); }} id='login-form' className='absolute top-65 w-[90%] sm:w-[470px] h-[250px] flex flex-col justify-center items-center bg-white/5 rounded-xl'>
          <input value={email} onChange={(e) => { setEmail(e.target.value); }} className='w-[90%] h-[40px] bg-black mb-5 py-5 px-3 border-2 text-2xl border-white/20 rounded-[8px]' type="email" placeholder='Email' />
          <input value={password} onChange={(e) => { setPassword(e.target.value); }} required className='w-[90%] h-[40px] bg-black py-5 px-3 border-2 text-2xl border-white/20 rounded-[8px]' type="password" placeholder='Password' />

          <button className='mt-8 w-[50%] h-[45px] border-2 border-blue-600 flex justify-center items-center py-6 text-3xl bg-black rounded-xl'>Login</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
