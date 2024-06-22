import React from 'react'
import { Link } from 'react-router-dom'

function Authentication({register}) {
  return (
    <div className='p-3  flex justify-center items-center h-screen'>
        <div className='bg-white rounded-xl p-3 py-8 px-8'>
            <h2 className='text-xl font-semibold'>{register ? "Create an Account" : "Login Here"}</h2>
            <div className='mt-3 flex flex-col gap-4'>
                {
                  register ?
                  <div className='flex flex-col gap-1'>
                    <label>Username</label>
                    <input type="text" className='border bg-slate-300 outline-none p-1 py-2 rounded px-2 w-96' />
                </div>
                :""
                }
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <input type="email" className='border bg-slate-300 outline-none p-1 py-2 rounded px-2 w-96' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Password</label>
                    <input type="password" className='border bg-slate-300 outline-none p-1 py-2 rounded px-2 w-96' />
                </div>
                <div className='flex flex-col gap-1 mt-2'>
                    <button className='bg-primary-color rounded py-2 hover:bg-fuchsia-500'>{register ? "Create an Account" : "Login"}</button>
                </div>
                <div className='flex flex-col gap-1 mt-2'>
                   <p>{register ?"Already have an account, " : "I don't have an account, "} <Link to={register ? '/login' : '/register'}><span className='text-blue-600 cursor-pointer hover:underline'>{register ? "Login Here" :'Register '}</span></Link> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Authentication