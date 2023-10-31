'use client';

import AuthModal from '@/components/AuthModal';
import { useUserStore } from '@/stores/userStore';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function page () {
    const { push } = useRouter()
    const user = useUserStore((state) => state)
    
    useEffect(() => {
        if( user.id ){
            push('/')
        }
    }, [user])

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <AuthModal/>
        </div>
    );
}

export default page;