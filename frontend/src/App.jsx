import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser} = useAuthContext();
  console.log(authUser)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ?<Home/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={authUser!==null ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/signup' element={authUser!==null ? <Navigate to='/'/> : <SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
