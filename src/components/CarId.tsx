"use client"

import { GetCarByIdQuery } from '../gql/graphql';
import { GET_CAR_BY_ID } from '../graphql/queries/GetCarById';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { BsCoin, BsGeoAlt, BsLightning, BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { FaCar, FaCarSide } from "react-icons/fa";
import { RiGasStationFill } from "react-icons/ri";
import { TbRoad } from 'react-icons/tb';
import { PiGitBranch } from "react-icons/pi";

var months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];

function CarId () {
    const carId = Number(useParams().id);
    const { data, loading, error} = useQuery<GetCarByIdQuery>(GET_CAR_BY_ID, {variables: {id: carId}});
    const userYear = data?.getCarById.user?.createdAt.slice(0, 4);
    const userMonth= months[+data?.getCarById.user?.createdAt.slice(5, 7)];
    const userDay = data?.getCarById.user?.createdAt.slice(8, 10);
    const userPhone = data?.getCarById.user?.phone?.slice(0, 6);
    return (
        <div className='Yantramanav max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-max max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'> 
            {data?.getCarById ? (
                <>
                <div className="flex items-center justify-between text-black mb-9 font-bold relative">
                <h1 className='text-3xl'>{data?.getCarById.brand?.name} {data?.getCarById.name}</h1>
                <BsCoin size={30} color='#292D32' className="absolute left-1/2 ml-5"/>
                <div className="text-2xl">$ {data?.getCarById.price}</div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <img src={data?.getCarById.images.split(', ')[0]} alt={data?.getCarById.name} className='w-full aspect-video object-cover'/>
                <div className="mb-14">
                    <div className="rounded-[14px] bg-[#F5F5F5] border-2 border-[#D4D4D4] pt-5 mb-8">
                        <div className="flex items-center gap-7 mb-5 pl-6">
                            <img src={data?.getCarById.user?.image} alt={data?.getCarById.user?.name} className='w-[50px] h-[50px] object-cover rounded-full'/>
                            <div>
                                <div className="text-black text-xl mb-1">{data?.getCarById.user?.name} {data?.getCarById.user?.surname}</div>
                                <div className="text-[#B5B5B5] text-sm">Account opening date : {userDay} {userMonth}, {userYear}</div>
                            </div>
                        </div>
                        <div className="pl-6 flex flex-col gap-2 text-sm relative mr-8 mb-4">
                            <div className="flex items-center gap-12 pl-[25px]">
                                <BsGeoAlt size={16} color="#000000" className="opacity-80"/>
                                <div className="text-[#000000]">{data?.getCarById.user?.location ? data?.getCarById.user?.location : 'Location not set'}</div>
                            </div>
                            <div className="flex items-center gap-12 pl-[25px]">
                                <BsLightning size={16} color="#000000" className="opacity-80"/>
                                <div className="text-[#000000]">{data?.getCarById.user?.type}</div>
                            </div>
                            <Link href={`/user/${data?.getCarById.user?.id}`} className='text-[#757474] text-xs absolute right-0 bottom-0'>Visit Profileㅤ&gt;</Link>
                        </div>
                        <div className="rounded-b-[10px] bg-[#D9D9D9] pb-7 pl-6 pr-8 pt-6">
                            <div className="pl-[25px] flex text-[#000000] gap-5 relative">
                                <div className="text-sm">Contact:</div>
                                <div className='flex flex-col gap-2'>
                                    <div className="flex items-center gap-5">
                                        <BsTelephone size={16} color="#000000" className="opacity-80"/>
                                        <div className="text-[#000000]">{data?.getCarById.user?.phone ? (userPhone + ' XXX XX') : 'Phone not set'}</div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CiMail size={16} color="#000000" className="opacity-80"/>
                                        <div className="text-[#000000]">{data?.getCarById.user?.email}</div>
                                    </div>
                                </div>
                                <Link href={`/user/${data?.getCarById.user?.id}`} className='text-[#757474] text-xs absolute right-0 bottom-0'>Message the sellerㅤ&gt;</Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 text-black">
                        <div className="flex items-center gap-4">
                            <BsCoin size={22} color='#494949'/>
                            <div>Price: ${data?.getCarById.price}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <BiCalendar size={22} color='#494949'/>
                            <div>Registration: {data?.getCarById.registration}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCar size={22} color='#494949'/>
                            <div>Make: {data?.getCarById.brand?.name}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <RiGasStationFill size={22} color='#494949'/>
                            <div>Fuel Type: {data?.getCarById.fuelType}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCar size={22} color='#494949'/>
                            <div>Model: {data?.getCarById.model?.name}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <TbRoad size={22} color='#494949'/>
                            <div>Mileage: {data?.getCarById.mileage}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCarSide size={22} color='#494949'/>
                            <div>Body Type: {data?.getCarById.bodyType}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <PiGitBranch size={22} color='#494949'/>
                            <div>Transmission: {data?.getCarById.transmission}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10">
                    {data?.getCarById.images.split(', ').slice(1, 4).map((image, index) => (
                        <img key={index} src={image} alt='Car' width={1920} height={1080} className='w-full h-full object-cover' />
                    ))}
                </div>
                </>
            ): (
                <>
                <h1 className='text-3xl mb-2'>Car not found</h1>
                <Link href='/car' className='text-[#5F6165] text-[14px] underline'>See all cars</Link>
                </>
            )}
        </div>
    );
}

export default CarId;