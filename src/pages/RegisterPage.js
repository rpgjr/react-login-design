import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaPenToSquare } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);

  const toggleShowPassword = (e) => {
    setShowPassword(!(showPassword));
    e.preventDefault();
  }

  const toggleConfirmPassword = (e) => {
    setConfirmPassword(!(confirmPassword));
    e.preventDefault();
  }

  return (
    <div id='login'>
      <form>
        <div>
          <h1 className='text-3xl font-bold'>Register to the Mountains</h1>
          <h1 className='text-sm mb-8'>Please sign up to have full access to our website.</h1>
        </div>
        <div>
          <div className='input-div mb-2'>
            <label>Full Name</label>
            <input type="text" className='w-full' />
          </div>
          <div className='input-div mb-2'>
            <label>Username</label>
            <input type="text" className='w-full' />
          </div>
          <div className='input-div mb-2'>
            <label>Email</label>
            <input type="email" className='w-full' />
          </div>
          <div className='input-div mb-5'>
            <label>Password</label>
            <div className='flex items-center gap-x-2'>
              <input type={showPassword ? 'password' : 'text'} className='w-full' />
              <button className='toggle-password' onClick={toggleShowPassword}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
            </div>
          </div>
          <div className='input-div mb-5'>
            <label>Confirm Password</label>
            <div className='flex items-center gap-x-2'>
              <input type={confirmPassword ? 'password' : 'text'} className='w-full' />
              <button className='toggle-password' onClick={toggleConfirmPassword}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
            </div>
          </div>
        </div>
        <button className='login-button mb-10 flex items-center justify-center text-sm'><span className='me-1'>Register</span> <FaPenToSquare className='font-semi' /></button>
        <p className='text-sm mb-1'>Already registered? Login <NavLink to='/' className='font-bold underline'>here.</NavLink></p>
        </form>
    </div>
  )
}

export default RegisterPage