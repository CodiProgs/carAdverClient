"use client";

import React, { useState } from 'react';
import Input from './Input';
import { useMutation } from '@apollo/client';
import { RegisterUserMutation } from '@/gql/graphql';
import { REGISTER_USER } from '@/graphql/mutations/Register';
import { useUserStore } from '@/stores/userStore';
import { GraphQLErrorExtensions } from 'graphql';
import SuccessModal from './SuccessModal';


function Register () {
    const [ registerUser, {loading, error, data} ] = useMutation<RegisterUserMutation>(REGISTER_USER)
    const setUser = useUserStore((state) => state.setUser);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
    const [registerData, setRegisterData] = React.useState({
        email: '',
        name: '',
        surname: '',
        password: '',
        image: 'https://sun9-29.userapi.com/impg/qVTiBuTA9dENqKA4VNQN80NzRxIBXl1YXYsR7A/GKFyIsVJSxk.jpg?size=1278x1280&quality=95&sign=2ad3cdb4b75c9dea0f0a38e0d12a50c4&type=album',
        type: 'User'
    })
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const handleRegister = async () => {
        setErrors({})
        
        const response = await registerUser({
            variables: {
                email: registerData.email,
                name: registerData.name,
                surname: registerData.surname,
                password: registerData.password,
                image: registerData.image,
                type: registerData.type
            }
        }).catch(error => {
            setErrors(error.graphQLErrors[0].extensions)
        })
        setShowSuccessModal(true)
        response && response.data && setUser(response.data.register.user!)
    }


    return (
        <>
        <div className='flex flex-col gap-[14px] mb-5'>
            <Input placeholder='Delowar' inputType='text' error={errors?.name as string} autoFocus={true} text='First Name' onChange={(e) => setRegisterData({...registerData, name: e.target.value})}/>
            <Input placeholder='Hossen' inputType='text' error={errors?.surname as string} autoFocus={false} text='Last Name' onChange={(e) => setRegisterData({...registerData, surname: e.target.value})}/>
            <Input placeholder='uistore@gmail.com' inputType='email ' error={errors?.email as string} autoFocus={false} text='Email' onChange={(e) => setRegisterData({...registerData, email: e.target.value})}/>
            <Input placeholder='**********' inputType='password' error={errors?.password as string} autoFocus={false} text='Password' onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>
        </div>
        {showSuccessModal && <SuccessModal text='Your account has been created'/>}
        <button className='bg-[#A162F7] w-full rounded-[10px] py-4 text-xl font-bold text-[#FFFAF7] outline-none' onClick={handleRegister}>Sign in</button>
        </>
    );
}

export default Register;