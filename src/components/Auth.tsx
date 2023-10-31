"use client";

import AuthModal from '../components/AuthModal';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Auth () {
    const { push } = useRouter()
    const user = useUserStore((state) => state)
    
    useEffect(() => {
        if( user.id ){
            push('/')
        }
    }, [user, push])

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <AuthModal/>
        </div>
    );
}

export default Auth;