"use client"

import AllMakeList from '../components/AllMakeList';
import Input from '../components/Input';
import SuccessModal from '../components/SuccessModal';
import { CreateModelMutation } from '../gql/graphql';
import { CREATE_MODEL } from '../graphql/mutations/CreateModel';
import { useUserStore } from '../stores/userStore';
import { useMutation } from '@apollo/client';
import { GraphQLErrorExtensions } from 'graphql';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function CreateModel () {
    const { push } = useRouter()
    const user = useUserStore((state) => state);
    const [errors, setErrors] = useState<GraphQLErrorExtensions>({});
    const [createModel, {loading, error, data}] = useMutation<CreateModelMutation>(CREATE_MODEL);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [modelPostData, setModelPostData] = useState({
        name: '',
        makeId: 0,
    })

    useEffect(() => {
        if( !user.id && user.type !== 'Pro' ){
            push('/')
        }
    }, [user])

    const handleCreateModel = async () => {
        setErrors({});

        await createModel({
            variables: {
                name: modelPostData.name,
                makeId: modelPostData.makeId,
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
        <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-full max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'>
            <h1 className='font-bold text-3xl mb-4 text-[#242731]'>Create Model car.</h1>
            <div className="py-5 pl-5 pr-10 bg-white rounded-[10px] mb-6 w-full">
                <div className='flex flex-col gap-4 mb-5 max-w-[500px] w-full'>
                    <Input placeholder='Urus' inputType='text' error={errors?.name as string} autoFocus={true} text='Name' onChange={(e) => setModelPostData({...modelPostData, name: e.target.value})}/>
                    <AllMakeList errorMakeId={errors?.makeId as string} label='Choose brand of your car' setIdMake={function(idMake:number){setModelPostData({...modelPostData, makeId: idMake})}}/>
                </div>
                <button className='text-[#FFFAF7] bg-[#A162F7] max-w-[200px] w-full rounded-[10px] py-4 outline-none font-bold' onClick={handleCreateModel}>Create Model</button>
            </div>
            {showSuccessModal && <SuccessModal text='Model created'/>}
        </div>
    );
}

export default CreateModel;