import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  
  const {loading,login}=useLogin();

  const handleSubmit=async(e)=>{
    e.preventDefault();

    await login({username,password})
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login 
        <span className='text-blue-500'> <svg id="logo-14" width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" class="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" class="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" class="ccompli2" fill="#5D2C02"></path> </svg></span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)} className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full input input-bordered h-10' />
          </div>
          <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>{loading ? <span className='loading loading-spinner'></span>:"Login"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login