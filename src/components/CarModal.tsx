"use client";

import React from 'react';
import Input from './Input';
import { GraphQLErrorExtensions } from 'graphql';
import { useUserStore } from '../stores/userStore';
import AllMakeList from './AllMakeList';
import GetModelsByMake from './GetModelsByMake';
import { useMutation } from '@apollo/client';
import { CreateCarMutation } from '../gql/graphql';
import { CREATE_CAR } from '../graphql/mutations/CreateCar';
import SuccessModal from './SuccessModal';

function CarModal () {
    const user = useUserStore((state) => state);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
    const [createCar, {loading, error, data}] = useMutation<CreateCarMutation>(CREATE_CAR);
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [carPostData, setCarPostData] = React.useState({
        name: '',
        price: '',
        bodyType: '',
        fuelType: '',
        mileage: '',
        transmission: '',
        brandId: 0,
        modelId: 0,
        userId: user.id,
        images: '',
        registration: '',
    })

    const handleCreateCar = async () => {
        setErrors({});

        await createCar({
            variables: {
                name: carPostData.name,
                price: +carPostData.price,
                bodyType: carPostData.bodyType,
                fuelType: carPostData.fuelType,
                mileage: +carPostData.mileage,
                transmission: carPostData.transmission,
                brandId: carPostData.brandId,
                modelId: carPostData.modelId,
                userId: carPostData.userId,
                images: carPostData.images,
                registration: carPostData.registration
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
            <h1 className='font-bold text-3xl mb-4 text-[#242731]'>Post car.</h1>
            <div className="py-5 pl-5 pr-10 bg-white rounded-[10px] mb-6">
                <div className='flex flex-col gap-[14px] mb-5 max-w-[800px] w-full'>
                    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                        <AllMakeList setIdMake={(id) => setCarPostData({...carPostData, brandId: id})} label='Choose brand' errorMakeId={errors?.brandId as string}/>
                        <GetModelsByMake brandId={carPostData.brandId} setIdModel={(id) => setCarPostData({...carPostData, modelId: id})} label='Choose model' errorModelId={errors?.modelId as string}/>
                    </div>
                    <Input placeholder='Lamborghini Urus' inputType='text' error={errors?.name as string} autoFocus={true} text='Name' onChange={(e) => setCarPostData({...carPostData, name: e.target.value})}/>
                    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                        <Input autoFocus={false} placeholder='SUV' inputType='text' error={errors?.bodyType as string} text='Body Type' onChange={(e) => setCarPostData({...carPostData, bodyType: e.target.value})}/>
                        <Input autoFocus={false} placeholder='Petrol' inputType='text' error={errors?.fuelType as string} text='Fuel Type' onChange={(e) => setCarPostData({...carPostData, fuelType: e.target.value})}/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                        <Input autoFocus={false} placeholder='2 000 000' inputType='text' error={errors?.price as string} text='Price' onChange={(e) => setCarPostData({...carPostData, price: e.target.value})}/>
                        <Input autoFocus={false} placeholder='2 000' inputType='text' error={errors?.mileage as string} text='Mileage' onChange={(e) => setCarPostData({...carPostData, mileage: e.target.value})}/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
                        <Input autoFocus={false} placeholder='Automatic' inputType='text' error={errors?.transmission as string} text='Transmission' onChange={(e) => setCarPostData({...carPostData, transmission: e.target.value})}/>
                        <Input autoFocus={false} placeholder='2022' inputType='text' error={errors?.registration as string} text='Registration' onChange={(e) => setCarPostData({...carPostData, registration: e.target.value})}/>
                    </div>
                    <Input autoFocus={false} placeholder='Url' inputType='text' error={errors?.image as string} text='Image' onChange={(e) => setCarPostData({...carPostData, images: e.target.value})}/>
                </div>
                <button className='text-[#FFFAF7] bg-[#A162F7] max-w-[200px] w-full rounded-[10px] py-4 outline-none font-bold' onClick={handleCreateCar}>Post</button>
            </div>
            {showSuccessModal && <SuccessModal text='Your car has been created.'/>}
        </div>
    );
}

export default CarModal;