"use client";

import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';

function AuthModal () {
    const [registered, setRegistered] = useState(false)
    const [checked, setChecked] = useState(false)

    return (
        <div className='max-w-[500px] w-full'>
            <h1 className='font-bold text-3xl mb-4 text-[#242731]'>Get’s started.</h1>
            <div className="flex items-center text-lg gap-1 mb-8">
                <div className="text-[#7C7C8D] font-normal">{registered ? 'Already have an account?' : 'Don’t have an account?'}</div>
                <button className='text-[#A162F7]' onClick={() => setRegistered(!registered)}>{registered ? 'Sign in' : 'Sign up'}</button>
            </div>
            <div className="flex items-center gap-[14px] mb-6">
                <button className='text-[#242731] bg-white max-w-[250px] w-full rounded-lg py-5'>Sign in with Google</button>
                <button className='text-[#FFFFFF] bg-[#4776D0] max-w-[250px] w-full rounded-lg py-5'>Sign in with Facebook</button>
            </div>
            <div className="flex items-center justify-between gap-[14px] mb-6">
                <div className='h-[1px] w-full bg-[#E6E8EC]'/>
                <div className='text-[#777E90] text-lg'>or</div>
                <div className='h-[1px] w-full bg-[#E6E8EC]'/>
            </div>
            <div className="py-5 pl-5 pr-10 bg-white rounded-[10px] mb-6">
                {registered ? <Register/> : <Login/>}
            </div>
            <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-[13px] relative">
                    <input type="checkbox" id='remember' className='hidden'/>
                    {checked && <AiOutlineCheck size={16} className='absolute' color='#40C057'/>}
                    <label htmlFor="remember" className='w-4 h-4 bg-inherit rounded border-[1.5px] border-[#B1B5C3]' onClick={() => setChecked(!checked)}></label>
                    <label htmlFor="remember" className='text-[#B1B5C3]' onClick={() => setChecked(!checked)}>Remember me</label>
                </div>
                <Link href='/' className='text-[#A162F7]'>Forgot your password?</Link>
            </div>
        </div>
    );
}

export default AuthModal;