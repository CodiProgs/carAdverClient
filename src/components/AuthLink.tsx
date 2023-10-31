"use client";

import { useUserStore } from '../stores/userStore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {AiOutlineUser} from 'react-icons/ai'
import { TbBell } from "react-icons/tb";
import { GrAdd } from "react-icons/gr";

function AuthLink () {
    const user = useUserStore((state) => state)
    const [mount, setMount] = React.useState(false)


    useEffect(() => {
        setMount(true)
    }, [ user, setMount ])

    if(mount){
        if(user.id){
            return (
                <div className='flex gap-10 items-center'>
                    {user.type === 'Pro' && (
                        <Link href='/create/car' className='border border-[#D4D4D4] rounded-md flex items-center gap-3 py-2 px-4 hover:bg-[#F3F5F8] max-lg:hidden'>
                            <GrAdd size={20} color="#000000" className="opacity-80"/>
                            <span>Post car</span>
                        </Link>
                    )} 
                    <TbBell size={28} color='#72767C' className='cursor-pointer'/>
                    <Link href={['/user/', user.id].join('')}>
                        <img src={user.image!} width={1920} height={1080} alt='Avatar' className='w-12 h-12 rounded-full object-cover'/>
                    </Link> 
                </div>
            )
        }else{
            return (
                <div className='flex items-center gap-6'>
                    <Link href='/auth' className='flex items-center gap-2 hover:bg-gray-300 bg-gray-200 p-3 rounded-lg'>
                        <AiOutlineUser color='#72767C' size={20}/>
                        <div className='text-[#5F6165] text-[14px] '>Sign up</div>
                    </Link>
                </div>
            )
        }
    }
}

export default AuthLink;