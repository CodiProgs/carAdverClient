"use client";

import { GetAllCarByMakeQuery } from '@/gql/graphql';
import { GET_ALL_CAR_BY_MAKE } from '@/graphql/queries/GetAllCarByMake';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

function page () {
    const makeId = Number(useParams().id);
    const { data, loading, error } = useQuery<GetAllCarByMakeQuery>(GET_ALL_CAR_BY_MAKE, {
        variables: {
            makeId: makeId
        }
    })
    return (
        <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-max max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'> 
            <div className="grid grid-cols-3 gap-10">
            {data?.getAllCarByMake.map((car) => {
                return (
                    <Link href={`/car/${car.id}`} key={car.id} className='w-full'>
                        <div className="w-full rounded-[14px] bg-white p-4 pr-7 shadow-xl">
                            <img src={car.images.split(', ')[0]} alt={car.name} className='mb-4 w-full h-[200px] object-cover'/>
                            <div className="text-xl font-bold mb-1 Yantramanav">{car.model?.name} {car.name}</div>
                            <div className="text-sm text-[#72767C]">{car.price} $</div>
                        </div>
                    </Link>
                )
            })} 
            </div>
            {data?.getAllCarByMake.length === 0 && (
                <div className="w-full rounded-[14px] bg-white p-4 pr-7 shadow-xl">
                    <div className="text-xl font-bold mb-1 Yantramanav">No car found</div>
                </div>
            )}
        </div>
    );
}

export default page;