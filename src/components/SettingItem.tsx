'use client';

import React, { useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import SettingItemInput from './SettingItemInput';

function SettingItem ({label, text, icon, onChange, error, closed, setData} : {label?: string, text: string, icon?: JSX.Element, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, error?: string, closed?: boolean, setData?: () => string}) {
    const [openInput, setOpenInput] = React.useState(false);

    useEffect(() => {
        if(closed){
            setOpenInput(false);
        }
    }, [closed, openInput]);

    return (
        <>
        
            <div className='w-full'>
                {label && <div className="text-[#7C7C8D] mb-2 text-[14px]">{label}</div>}
                <div className='rounded-[10px] border border-[#E9EAEC] py-3 px-4 text-[#5F6165] text-[14px] flex items-center justify-between gap-[10px] EditProfile relative'>
                    <div className={['flex items-center gap-[10px]', openInput ? 'absolute' : ''].join(' ')}>
                        {icon}
                        {text}
                    </div>
                    <button className='opacity-0 ButtonEditProfile' onClick={() => setOpenInput(true)}>
                        <AiOutlineEdit size={20} color="#7C7C8D"/>
                    </button>
                    {openInput && <SettingItemInput modal={true} onClick={() => {setOpenInput(false); setData!()}} onChange={onChange}/>}
                </div>
                {error && <div className='text-red-500 text-[12px]'>{error}</div>}
            </div>
            
        </>
    );
}

export default SettingItem;