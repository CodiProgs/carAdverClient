"use client";

import { GetUserByTypeQuery } from '@/gql/graphql';
import { GET_USER_BY_TYPE } from '@/graphql/queries/GetUserByType';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import React from 'react';
import { BsGeoAlt } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';

var months = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];

function page () {

    const {data, loading, error} = useQuery<GetUserByTypeQuery>(GET_USER_BY_TYPE, {variables: {type: 'Pro'}})
    
    return (
        <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-max max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'> 
            <h1 className='font-bold text-3xl mb-4 text-[#242731]'>All sellers</h1>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-xl:grid-cols-1">
                {data?.getUsersByType?.length ? (
                    data.getUsersByType.map((user) => (
                        
                        <div key={user.id} className="rounded-[14px] bg-[#F5F5F5] border-2 border-[#D4D4D4] pt-5 mb-8">
                        <div className="flex items-center gap-7 mb-5 pl-6">
                            <img src={user.image} alt={user.name} className='w-[50px] h-[50px] object-cover rounded-full'/>
                            <div>
                                <div className="text-black text-xl mb-1">{user.name} {user.surname}</div>
                                <div className="text-[#B5B5B5] text-sm">Account opening date : {user.createdAt.slice(8, 10)} {months[+user.createdAt.slice(5, 7)]}, {user.createdAt.slice(0, 4)}</div>
                            </div>
                        </div>
                        <div className="pl-6 flex flex-col gap-2 text-sm relative mr-8 mb-4">
                            <div className="flex items-center gap-12 pl-[25px]">
                                <BsGeoAlt size={16} color="#000000" className="opacity-80"/>
                                <div className="text-[#000000]">{user.location ? user.location : 'Location not set'}</div>
                            </div>
                            <div className="flex items-center gap-12 pl-[25px]">
                                <CiMail size={16} color="#000000" className="opacity-80"/>
                                <div className="text-[#000000]">{user.email}</div>
                            </div>

                            <Link href={`/user/${user.id}`} className='text-[#757474] text-xs absolute right-0 bottom-0 max-sm:relative max-sm:text-end'>Visit Profileㅤ&gt;</Link>
                        </div>
                    </div>
                    ))
                ) : (
                    <h1 className='text-xl mb-2'>No user found</h1>
                )}
            </div>
        </div>
    );
}

export default page;