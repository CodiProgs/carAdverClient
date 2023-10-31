"use client";

import Cars from '@/components/Cars';
import { GetUserByIdQuery } from '@/gql/graphql';
import { GET_USER_BY_ID } from '@/graphql/queries/GetUserById';
import { useUserStore } from '@/stores/userStore';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import {BsGeoAlt, BsLightning, BsTelephone} from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
var months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];


function page () {
    const user = useUserStore((state) => state);
    const userId = Number( useParams().id);
    const [mount, setMount] = React.useState(false);
    const {loading, error, data} = useQuery<GetUserByIdQuery>(GET_USER_BY_ID, { variables: { id: userId } });
    const userYear = data?.getUserById.user?.createdAt?.slice(0, 4);
    const userMonth= months[+data?.getUserById.user?.createdAt?.slice(5, 7)];
    const userDay = data?.getUserById.user?.createdAt?.slice(8, 10);
    const userPhone = data?.getUserById.user?.phone?.slice(0, 6);

    useEffect(() => {
        if(!loading) {
            setMount(true);
        }
    }, [loading])
    if(mount){
        return (
            <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-full max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'>
            <div className='w-full px-8 py-7 h-max bg-white mb-14'>
                <h1 className='font-bold text-3xl mb-7'>Profile</h1>
                <div className="flex items-center gap-10 mb-8 Yantramanav max-lg:flex-col max-lg:items-start">
                    <div className='flex gap-6 items-center max-[425px]:flex-col max-[425px]:items-center max-[425px]:w-full max-[425px]:text-center'>
                        <img src={data?.getUserById.user?.image!} width={1920} height={1080} alt='Avatar' className='w-[80px] h-[80px] rounded-full max-lg:w-[60px] max-lg:h-[60px] object-cover' />
                        <div>
                            <div className="text-[#000000] font-bold text-2xl mb-1">{data?.getUserById.user?.name} {data?.getUserById.user?.surname}</div>
                            <div className="text-[#B5B5B5] text-[14px]">Account opening date : {userDay} {userMonth}, {userYear}</div>
                        </div>
                    </div>
                    {user.id === userId && (
                        <Link href='/settings' className='border border-[#D4D4D4] rounded-md flex items-center gap-3 py-2 px-4 hover:bg-[#F3F5F8] max-[425px]:mx-auto'>
                            <AiOutlineEdit size={24} color="#000000" className="opacity-80"/>
                            <span>Edit Profile</span>
                        </Link>
                    )}
                </div>
                <div className="flex items-center max-w-[800px] gap-3 justify-between Yantramanav max-lg:flex-col max-lg:items-start">
                    <div className='flex flex-col gap-3'>
                        <div className="flex items-center gap-12">
                            <BsGeoAlt size={24} color="#000000" className="opacity-80"/>
                            <div className="text-[#000000]">{data?.getUserById.user?.location ? data?.getUserById.user?.location : 'Location not set'}</div>
                        </div>
                        <div className="flex items-center gap-12">
                            <BsLightning size={24} color="#000000" className="opacity-80"/>
                            <div className="text-[#000000]">{data?.getUserById.user?.type}</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className="flex items-center gap-12">
                            <BsTelephone size={24} color="#000000" className="opacity-80"/>
                            <div className="text-[#000000]">{data?.getUserById.user?.phone ? (userPhone + ' XXX XX') : 'Phone not set'}</div>
                        </div>
                        <div className="flex items-center gap-12">
                            <CiMail size={24} color="#000000" className="opacity-80"/>
                            <div className="text-[#000000]">{data?.getUserById.user?.email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-max pb-6">
                <h2 className='font-bold text-xl mb-7'>Cars</h2>
                <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {data?.getUserById.user?.cars?.length ? 
                        (
                            data?.getUserById.user?.cars?.map((car) => (
                                <Link href={`/car/${car.id}`} key={car.id} className="w-full rounded-[14px] bg-white p-4 pr-7 shadow-xl">
                                    <div className="w-full">
                                        <img src={car.images.split(', ')[0]} alt={car.name} className='mb-4 w-full h-[200px] object-cover'/>
                                        <div className="text-xl font-bold mb-1">{car.model?.name} {car.name}</div>
                                        <div className="text-sm text-[#72767C]">{car.price} $</div>
                                    </div>
                                </Link>
                            ))
                        )
                        : (
                        <h2 className='text-xl mb-2'>No car found</h2>
                    )}
                </div>
            </div>
            </div>
        );
    }
}

export default page;