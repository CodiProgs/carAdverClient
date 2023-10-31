"use client";

import React from 'react';
import CarItem from './CarItem';
import { useQuery } from '@apollo/client';
import { GetAllCarsQuery } from '@/gql/graphql';
import { GET_ALL_CAR } from '@/graphql/queries/GetAllCar';
import Link from 'next/link';

function Cars () {
    const { data, loading, error } = useQuery<GetAllCarsQuery>(GET_ALL_CAR);
    return (
        <div className="grid w-full max-lg:grid-cols-2 grid-cols-3 gap-10 max-md:grid-cols-1 max-[425px]:gap-4">
            {!loading && 
            (
                data ? (
                    <>
                        {data?.getAllCars.map((car) => (
                            <Link href={`/car/${car.id}`} key={car.id} className="w-full rounded-[14px] bg-white p-4 pr-7 shadow-xl">
                                <div className="w-full">
                                    <img src={car.images.split(', ')[0]} alt={car.name} className='mb-4 w-full h-[200px] object-cover'/>
                                    <div className="text-xl font-bold mb-1">{car.model?.name} {car.name}</div>
                                    <div className="text-sm text-[#72767C]">{car.price} $</div>
                                </div>
                            </Link>
                        ))}
                    </>
                ) : (
                    <h1 className='text-3xl mb-2'>No car found</h1>
                )
            )
            
            }
        </div>
    );
}

export default Cars;