"use client";

import React, { useEffect } from 'react';
import Input from './Input';
import { useMutation } from '@apollo/client';
import { LoginUserMutation } from '@/gql/graphql';
import { LOGIN_USER } from '@/graphql/mutations/Login';
import { useUserStore } from '@/stores/userStore';
import { GraphQLErrorExtensions } from 'graphql';
import SuccessModal from './SuccessModal';

function Login () {
    const [loginUser, {loading, error, data} ] = useMutation<LoginUserMutation>(LOGIN_USER);
    const setUser = useUserStore((state) => state.setUser);
    const [invalidCredentials, setInvalidCredentials] = React.useState("");
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    })
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const handleLogin = async () => {
        setErrors({})

        try {
            const response = await loginUser({
                variables: {
                    email: loginData.email,
                    password: loginData.password
                }
            }).catch(error => {
                if(error && error.graphQLErrors[0].extensions?.invalidCredentials)
                {
                    setInvalidCredentials(error.graphQLErrors[0].extensions?.invalidCredentials as string)
                    console.log(invalidCredentials )
                }else{
                    setErrors(error.graphQLErrors[0].extensions)
                }
            })
            response && response.data && setUser(response.data.login.user)
        }catch(error){
            console.log(error)
        }
        setShowSuccessModal(true)
    }

    return (
        <>
            <div className='flex flex-col gap-[14px] mb-5'>
                <Input placeholder='uistore@gmail.com' inputType='email' error={errors?.email as string} autoFocus={false} text='Email' onChange={(e) => {setLoginData({...loginData, email: e.target.value})}}/>
                <Input placeholder='**********' inputType='password' error={errors?.password as string} autoFocus={false} text='Password' onChange={(e) => {setLoginData({...loginData, password: e.target.value})}}/>
            </div>
            <span className='text-red-500 text-[14px]'>{invalidCredentials}</span>
            <button className='bg-[#A162F7] w-full rounded-[10px] py-4 text-xl font-bold text-[#FFFAF7] outline-none' onClick={handleLogin}>Sign in</button>
            {showSuccessModal && <SuccessModal text='Your account has been created'/>}
        </>
    );
}

export default Login;