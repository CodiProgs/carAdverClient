"use client"

import { UpdateTypeMutation } from '../gql/graphql';
import { UPDATE_TYPE } from '../graphql/mutations/UpdateType';
import { useUserStore } from '../stores/userStore';
import { useMutation } from '@apollo/client';
import { GraphQLErrorExtensions } from 'graphql';
import { useRouter } from 'next/navigation';
import React from 'react';

function SettingsPro () {
    const user = useUserStore((state) => state);
    const setUser = useUserStore((state) => state.setUser);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
    const [updateType, {loading, error, data}] = useMutation<UpdateTypeMutation>(UPDATE_TYPE);
    const [updateData, setUpdateData] = React.useState({
        email: user.email,
        type: 'Pro'
    })
    const { push } = useRouter()

    const handleUpdateType = async () => {
        setErrors({});

        const response = await updateType({
            variables: {
                email: updateData.email,
                type: updateData.type
            }
        }).catch(error => {
            setErrors(error.graphQLErrors[0].extensions)
        })

        const updatedUser = ({
            ...user,
            type: updateData.type
        })
        response && response.data && setUser(updatedUser)

        push(`/user/${user.id}`)
    }

    return (
        <div>
            <h2 className='text-xl font-bold text-[#242731] mb-[6px]'>Pro account</h2>
            <div className="text-[#5F6165] font-normal pb-6 border-b border-[#E9EAEC] mb-7">Get pro account here.</div>
            <div className="max-w-[400px] w-full flex flex-col gap-8">
                <button className='text-[#FFFAF7] bg-[#A162F7] rounded-[10px] py-4 outline-none font-bold' onClick={handleUpdateType}>Get Pro</button>
            </div>
        </div>
    );
}

export default SettingsPro;