import React, { useState } from 'react'

const Login = () => {

     
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("form submitted");

        console.log("Email:", email);
        console.log("Password:", password);

        // Clear the form fields after submission   
        setEmail('');
        setPassword('');
    }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-10'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }}className='flex flex-col items-center justify-center gap-4 p-4'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}required className='text-black outline-none  bg-transparent border-2 border-emerald-600 rounded-full text-lg py-3 px-5 placeholder:text-gray-500'type="email" placeholder='Enter your email'/>
                <input  value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} required className='text-black outline-none  bg-transparent border-2 border-emerald-600 rounded-full text-lg py-3 px-5 placeholder:text-gray-500' type="password" placeholder='Enter your password'/>
                <button className='text-white w-60 outline-none border-none hover:bg-emerald-700 font-semibold bg-emerald-600 rounded-full text-lg py-3 px-5'>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login