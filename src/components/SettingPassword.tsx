"use client";

import React from 'react';
import SettingItemInput from './SettingItemInput';
import { useMutation } from '@apollo/client';
import { UpdatePasswordMutation } from '@/gql/graphql';
import { useUserStore } from '@/stores/userStore';
import { GraphQLErrorExtensions } from 'graphql';
import { UPDATE_PASSWORD } from '@/graphql/mutations/UpdatePassword';
import SuccessModal from './SuccessModal';

function SettingPassword () {
    const [ updatePassword, {loading, error, data} ] = useMutation<UpdatePasswordMutation>(UPDATE_PASSWORD)
    const user = useUserStore((state) => state);
    const [updateData, setUpdateData] = React.useState({
        email: user.email!,
        password: ''
    })
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({})

    const handleUpdatePassword = async () => {
        setErrors({})

        await updatePassword({
            variables: {
                email: updateData.email,
                password: updateData.password,
            }
        }).catch(error => {
            setErrors(error.graphQLErrors[0].extensions)
        })

        setShowSuccessModal(true)
        setTimeout(() => {
            setShowSuccessModal(false);
        }, 2000)
    }


    return (
        <div>
            <h2 className='text-xl font-bold text-[#242731] mb-[6px]'>Password</h2>
            <div className="text-[#5F6165] font-normal pb-6 border-b border-[#E9EAEC] mb-7">Update your password here.</div>
            <div className="max-w-[400px] w-full flex flex-col gap-8 mb-8">
                <div className="w-full">
                    <div className="absolute -top-[200%] opacity-0">
                        <SettingItemInput type='email' placeholder='**********' onChange={(e) => setUpdateData({...updateData, password: e.target.value})}/>
                    </div>
                    <SettingItemInput type='password' placeholder='**********' onChange={(e) => setUpdateData({...updateData, password: e.target.value})}/>
                    {errors?.password as string && <div className='text-red-500 text-[12px]'>{errors?.password as string}</div>}
                </div>
                <button className='text-[#FFFAF7] bg-[#A162F7] rounded-[10px] py-4 outline-none font-bold' onClick={handleUpdatePassword}>Save</button>
            </div>
            {showSuccessModal && <SuccessModal text='Your password has been updated'/>}
        </div>
    );
}

export default SettingPassword;