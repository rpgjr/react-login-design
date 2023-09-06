import React, { useState } from 'react'
import { FaArrowRightFromBracket, FaEye, FaEyeSlash } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = (e) => {
    setShowPassword(!(showPassword));
    e.preventDefault();
  }

  return (
    <div id='login'>
      <form>
        <div>
          <h1 className='text-3xl font-bold'>Login to the Mountains</h1>
          <h1 className='text-sm mb-8'>Please sign in to have full access to our website.</h1>
        </div>
        <div>
          <div className='input-div mb-4'>
            <label>Username</label>
            <input type="text" className='w-full' />
          </div>
          <div className='input-div mb-5'>
            <label>Password</label>
            <div className='flex items-center gap-x-2'>
              <input type={showPassword ? 'password' : 'text'} className='w-full' />
              <button className='toggle-password' onClick={toggleShowPassword}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
            </div>
          </div>
        </div>
        <button className='login-button mb-10 flex items-center justify-center text-sm'><span className='me-1'>Login</span> <FaArrowRightFromBracket className='font-semi' /></button>
        <p className='text-sm mb-1'>No account? Register <NavLink to='/register' className='font-bold underline'>here.</NavLink></p>
        <p className='text-sm mb-2'>Forgot password? Click <NavLink to='/forgot-password' className='font-bold underline'>here.</NavLink></p>
      </form>
    </div>
  )
}

export default LoginPage