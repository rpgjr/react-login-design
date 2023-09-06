import React, { useState } from 'react'
import { FaPaperPlane } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = (e) => {
    setShowPassword(!(showPassword));
    e.preventDefault();
  }

  return (
    <div id='login'>
      <form>
        <div>
          <h1 className='text-3xl font-bold'>Forgot Password</h1>
          <h1 className='text-sm mb-8'>Please enter your email and username for validation.</h1>
        </div>
        <div>
          <div className='input-div mb-4'>
            <label>Email</label>
            <input type="text" className='w-full' />
          </div>
          <div className='input-div mb-4'>
            <label>Username</label>
            <input type="text" className='w-full' />
          </div>
        </div>
        <button className='login-button mb-10 flex items-center justify-center text-sm'><span className='me-1'>Reset Password</span> <FaPaperPlane className='font-semi' /></button>
        <p className='text-sm mb-1'>Already registered? Login <NavLink to='/' className='font-bold underline'>here.</NavLink></p>
        <p className='text-sm mb-1'>No account? Register <NavLink to='/register' className='font-bold underline'>here.</NavLink></p>
      </form>
    </div>
  )
}

export default ForgotPasswordPage