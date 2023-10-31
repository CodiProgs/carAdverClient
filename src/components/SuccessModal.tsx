"use client";

import React, { useEffect } from 'react';

function SuccessModal ({text}: {text: string}) {
    const [showModal, setShowModal] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 2000)
    }, [])
    
    if(!showModal){
        return (
            <div className='absolute left-0 right-0 mx-auto bg-white py-5 px-8 top-0 z-50 shadow-2xl w-max rounded-xl'>
                {text}
            </div>
        );
    }
}

export default SuccessModal;