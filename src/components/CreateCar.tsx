'use client'

import CarModal from '../components/CarModal';
import GetModelsByMake from '../components/GetModelsByMake';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function CreateCar () {
    const { push } = useRouter()
    const user = useUserStore((state) => state)
    
    useEffect(() => {
        if( !user.id && user.type !== 'Pro' ){
            push('/')
        }
    }, [user])

    return (
        <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-max max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'>
            <CarModal/>
        </div>
    );
}

export default CreateCar;