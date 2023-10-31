"use client"

import React, { useEffect } from 'react';
import SettingItem from './SettingItem';
import { useUserStore } from '../stores/userStore';
import { useMutation } from '@apollo/client';
import { UpdateUserMutation } from '../gql/graphql';
import { AiOutlineReload, AiOutlineUser } from 'react-icons/ai';
import SettingItemInput from './SettingItemInput';
import { UPDATE_USER } from '../graphql/mutations/Update';
import { GraphQLErrorExtensions } from 'graphql';
import { BsGeoAlt, BsTelephone } from 'react-icons/bs';
import SuccessModal from './SuccessModal';

function SettingProfile () {
    const user = useUserStore((state) => state);
    const [ updateUser, {loading, error, data} ] = useMutation<UpdateUserMutation>(UPDATE_USER)
    const [mount, setMount] = React.useState(false);
    const setUser = useUserStore((state) => state.setUser);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
    const [closedInput, setClosedInput] = React.useState(false);
    const [openInputImg, setOpenInputImg] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState(user.image);
    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    useEffect(() => {
        setMount(true);
    }, [])

    const [updateData, setUpdateData] = React.useState({
        email: user.email,
        image: user.image,
        location: user.location === "" ? null : user.location,
        name: user.name,
        phone: user.phone === "" ? null : user.phone,
        surname: user.surname,
    })

    const handleRegister = async () => {
        setErrors({})
        const response = await updateUser({
            variables: {
                email: updateData.email,
                name: updateData.name === '' ? user.name : updateData.name,
                surname: updateData.surname === '' ? user.surname : updateData.surname,
                image: updateData.image === '' ? user.image : updateData.image,
                location: updateData.location === '' ? user.location : updateData.location,
                phone: updateData.phone === '' ? user.phone : updateData.phone,
            }
        }).catch(error => {
            setErrors(error.graphQLErrors[0].extensions)
        })
        response && response.data && setUser(response?.data?.updateUser.user!)

        setClosedInput(true)
        setTimeout(() => {
            setClosedInput(false)
        }, 100)

        setShowSuccessModal(true)
        setTimeout(() => {
            setShowSuccessModal(false);
        }, 2000)
    }
    
    if(mount){
        return (
            <div>
                <h2 className='text-xl font-bold text-[#242731] mb-[6px]'>Profile</h2>
                <div className="text-[#5F6165] font-normal pb-6 border-b border-[#E9EAEC] mb-7">Update your photo and personal details here.</div>
                <div className="max-w-[800px] w-full flex flex-col gap-8 mb-8">
                    <div className="grid grid-cols-2 gap-9 max-lg:grid-cols-1 max-lg:gap-7">
                        <SettingItem setData={() => updateData.name = ''} closed={closedInput} error={errors?.name as string} text={user.name!} label='Name' icon={<AiOutlineUser size={20} color="#7C7C8D"/> } onChange={(e) => setUpdateData({...updateData, name: e.target.value})}/>
                        <SettingItem setData={() => updateData.surname = ''} closed={closedInput} error={errors?.surname as string} text={user.surname!} label='Surname' icon={<AiOutlineUser size={20} color="#7C7C8D"/>} onChange={(e) => setUpdateData({...updateData, surname: e.target.value})}/>
                    </div>
                    <div className="grid grid-cols-2 gap-9 max-lg:grid-cols-1 max-lg:gap-7 ">
                        <SettingItem setData={() => updateData.location = ''} closed={closedInput} error={errors?.location as string} text={user.location! ? user.location : "Location not set"} label='Location' icon={<BsGeoAlt size={20} color="#7C7C8D"/> } onChange={(e) => setUpdateData({...updateData, location: e.target.value})}/>
                        <SettingItem setData={() => updateData.phone = ''} closed={closedInput} error={errors?.phone as string} text={user.phone! ? user.phone : "Phone not set"} label='Phone' icon={<BsTelephone size={20} color="#7C7C8D"/>} onChange={(e) => setUpdateData({...updateData, phone: e.target.value})}/>
                    </div>
                </div>
                <div className="h-[1px] bg-[#E9EAEC] w-full "/>
                <div className="my-6 flex items-center max-w-[800px] w-full justify-between max-lg:flex-col max-lg:gap-4 max-lg:items-center">
                    <div className="flex items-center gap-16 relative max-sm:flex-col max-sm:gap-4">
                        <div>
                            <div className="text-[#242731] mb-1">Your photo</div>
                            <div className="text-[#7C7C8D] text-[14px] font-normal">This will be displayed on your profile.</div>
                        </div>
                        <img src={imageUrl} width={1920} height={1080} alt='Avatar' className='w-[64px] h-[64px] min-w-[64px]  rounded-full object-cover'/>
                        {openInputImg && (
                            <button className="text-[#A162F7] absolute right-[74px] max" onClick={() => setOpenInputImg(true)}>
                                <AiOutlineReload size={24} color="#7C7C8D" onClick={() => setImageUrl(updateData.image)}/>
                            </button>
                        )}
                    </div>
                    <div className="flex items-center gap-6 text-[14px] relative py-3 max-w-[300px] w-full justify-end max-lg:justify-center">
                        <button className="text-[#7C7C8D]">Delete</button>
                        <button className="text-[#A162F7]" onClick={() => setOpenInputImg(true)}>Update</button>
                        {openInputImg && (
                            <SettingItemInput type='url' modal={true} placeholder='Url Image' onChange={(e) => setUpdateData({...updateData, image: e.target.value})} onClick={() => setOpenInputImg(false)} setData={() => updateData.image = ''}/>
                        )}
                        
                    </div>
                </div>
                <div className="h-[1px] bg-[#E9EAEC] w-full "/>
                <div className="flex max-w-[800px] w-full justify-between mt-6 max-lg:mb-4">
                    <h2 className='text-[#242731]'>Social Profiles</h2>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <SettingItemInput type='text' text='facebook.com/'/>
                        <SettingItemInput type='text' text='twitter.com/'/>
                    </div>
                </div>
                <button className='text-[#FFFAF7] bg-[#A162F7] max-w-[200px] w-full rounded-[10px] py-4 outline-none font-bold' onClick={handleRegister}>Save changes</button>
                {showSuccessModal && <SuccessModal text='Your profile has been updated'/>}
            </div>
        );
    }
}

export default SettingProfile;