"use client"

import React from 'react';
import { useUserStore } from '../stores/userStore';
import SettingItemInput from './SettingItemInput';
import { GraphQLErrorExtensions } from 'graphql';
import { useMutation } from '@apollo/client';
import { UpdateEmailMutation } from '../gql/graphql';
import { UPDATE_EMAIL } from '../graphql/mutations/UpdateEmail';
import SuccessModal from './SuccessModal';

function SettingsEmail () {
    const user = useUserStore((state) => state);
    const setUser = useUserStore((state) => state.setUser);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({})
    const [updateEmail, {loading, error, data}] = useMutation<UpdateEmailMutation>(UPDATE_EMAIL)
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [updateData, setUpdateData] = React.useState({
        id: user.id,
        email: ''
    })

    const handleUpdateEmail = async () => {
        setErrors({})

        const response = await updateEmail({
            variables: {
                id: updateData.id,
                email: updateData.email
            }
        }).catch(error => {
            setErrors(error.graphQLErrors[0].extensions)
        })

        const updatedUser = ({
            ...user,
            email: updateData.email
        })
        response && response.data && setUser(updatedUser)
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
                    <SettingItemInput type='email' placeholder={user.email} onChange={e => setUpdateData({...updateData, email: e.target.value})}/>
                    {errors?.email as string && (
                        <p className="text-red-500 text-[14px]">{errors?.email as string}</p>
                    )}
                </div>
                <button className='text-[#FFFAF7] bg-[#A162F7] rounded-[10px] py-4 outline-none font-bold' onClick={handleUpdateEmail}>Save</button>
                {showSuccessModal && <SuccessModal text='Email updated successfully'/>}
            </div>
        </div>
    );
}

export default SettingsEmail;