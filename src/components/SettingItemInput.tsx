import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function SettingItemInput ({text, label, placeholder, modal, onClick, onChange, setData, type}: {text?: string, label?: string, placeholder?: string, modal?: boolean, onClick?: () => void, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, setData?: () => string, type: string}) {

    return (
        <div className='w-full'>
            {label && <div className="text-[#7C7C8D] mb-2 text-[14px]">{label}</div>}
            <input onChange={onChange} type={type} defaultValue={text} placeholder={placeholder} className={['rounded-[10px] border border-[#E9EAEC] py-3 pl-4 pr-10 text-[#7C7C8D] text-[14px] w-full outline-none', modal ? 'absolute w-full h-full bg-white top-[0%] left-[0%] rounded-[10px] z-60 flex items-center' : ''].join(' ')}/>
            {modal && <AiOutlineCloseCircle autoComplete="off" onClick={() => {onClick!(); setData!()}} size={20} color="#7C7C8D" className='absolute top-3 right-3 w-[20px] h-[20px] object-contain cursor-pointer'/>}
        </div>
    );
}

export default SettingItemInput;
