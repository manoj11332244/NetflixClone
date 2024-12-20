import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isLogin,setIsLogin]=useState(false)
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    const loginHandler =()=>{
        setIsLogin(!isLogin)
    }

    const getInputData = (e)=>{
        e.preventDefault();
        setEmail('')
        setFullName('')
        setPassword('')
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh]' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='Banner'/>
        </div>

        <form onSubmit={getInputData} className='absolute bg-black w-3/12 p-12 flex flex-col items-center justify-center mx-auto my-36 left-0 right-0 opacity-90 rounded-md'>
           <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Sign-Up"}</h1>
            <div className='flex flex-col'>  
                {
                    !isLogin && <input onChange={(e)=>setFullName(e.target.value)} className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'  type='text' placeholder='Full Name' value={fullName}/>            
                }   
                <input onChange={(e)=>setEmail(e.target.value)} className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' type='text' placeholder='Email' value={email}/>   
                <input onChange={(e)=>setPassword(e.target.value)} className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-whi' type='Password' placeholder='Password' value={Password}/>
                 <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin?"Login":"Signup"}</button>
                 <p className='text-white mt-2'>{isLogin?  "New to Netflix" : "Already have an account??" } <span onClick={loginHandler} className='ml-1 text-blue-500 font-medium cursor-pointer'>{isLogin?"Signup":"Login"}</span></p>
            </div>
        </form>
    </div>
  )
}

export default Login