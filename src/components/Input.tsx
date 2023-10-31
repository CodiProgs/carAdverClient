"use client";

import React, { useEffect } from 'react';

interface InputProps {
    placeholder: string;
    inputType: string;
    text: string;
    error: string;
    autoFocus: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input (
    {
        placeholder, autoFocus, error, inputType, onChange, text
    }: InputProps) {
    useEffect(() => {
        if( autoFocus ){
            const input = document.getElementById(`input-${placeholder}`)
            input?.focus()
        }
    }, [autoFocus, placeholder])

    return (
        <div>
            <label htmlFor={`input-${placeholder}`} className='text-[#242731]'>{text}</label>
            <input 
                id={`input-${placeholder}`}
                placeholder={placeholder}
                type={inputType}
                autoComplete='off'
                onChange={onChange}
                className='w-full mt-2 rounded-[10px] px-5 py-5 placeholder:text-[#777E90] outline-none text-[#5F6165] border border-[#B1B5C3]'
            />
            {error && (
                <span className='text-red-500 text-[14px] font-semibold'>{error}</span>
            )}
        </div>
    );
}

export default Input;