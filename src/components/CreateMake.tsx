"use client"

import React, { useEffect } from 'react';
import Input from '../components/Input';
import SuccessModal from '../components/SuccessModal';
import { CreateMakeMutation } from '../gql/graphql';
import { CREATE_MAKE } from '../graphql/mutations/CreateMake';
import { useUserStore } from '../stores/userStore';
import { useMutation } from '@apollo/client';
import { GraphQLErrorExtensions } from 'graphql';
import { useRouter } from 'next/navigation';

function CreateMake () {
    const { push } = useRouter()
    const user = useUserStore((state) => state);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
    const [createMake, {loading, error, data}] = useMutation<CreateMakeMutation>(CREATE_MAKE);
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [makePostData, setMakePostData] = React.useState({
        name: '',
        image: '',
    })

    useEffect(() => {
        if( !user.id && user.type !== 'Pro' ){
            push('/')
        }
    }, [user])

    const handleCreateMake = async () => {
        setErrors({});

        await createMake({
            variables: {
                name: makePostData.name,
                image: makePostData.image,
            }
        })

        setShowSuccessModal(true)
        setTimeout(() => {
            setShowSuccessModal(false);
        }, 2000)
    }

    return (
        <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-full max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'>
            <h1 className='font-bold text-3xl mb-4 text-[#242731]'>Create Brand.</h1>
            <div className="py-5 pl-5 pr-10 bg-white rounded-[10px] mb-6 w-full">
                <div className='flex flex-col gap-[14px] mb-5 max-w-[500px] w-full'>
                    <Input placeholder='Lamborghini' inputType='text' error={errors?.name as string} autoFocus={true} text='Name' onChange={(e) => setMakePostData({...makePostData, name: e.target.value})}/>
                    <Input placeholder='Url to image' inputType='text' error={errors?.image as string} autoFocus={true} text='Image' onChange={(e) => setMakePostData({...makePostData, image: e.target.value})}/>
                </div>
                <button className='text-[#FFFAF7] bg-[#A162F7] max-w-[200px] w-full rounded-[10px] py-4 outline-none font-bold' onClick={handleCreateMake}>Create Brand</button>
            </div>
            {showSuccessModal && <SuccessModal text='Brand created'/>}
        </div>
    );
}

export default CreateMake;