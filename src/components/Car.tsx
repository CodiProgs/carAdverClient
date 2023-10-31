import React from 'react';
import { GetAllCarsQuery } from '../gql/graphql';
import { GET_ALL_CAR } from '../graphql/queries/GetAllCar';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

function Car () {
    const { data, loading, error } = useQuery<GetAllCarsQuery>(GET_ALL_CAR);

    return (
        <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-max max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'> 
            {!loading && 
            (
                data ? (
                    <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {data?.getAllCars.map((car) => (
                            <Link href={`/car/${car.id}`} key={car.id} className="w-full rounded-[14px] bg-white p-4 pr-7 shadow-xl">
                                <div className="w-full">
                                    <img src={car.images.split(', ')[0]} alt={car.name} className='mb-4 w-full h-[200px] object-cover'/>
                                    <div className="text-xl font-bold mb-1">{car.model?.name} {car.name}</div>
                                    <div className="text-sm text-[#72767C]">{car.price} $</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <h1 className='text-3xl mb-2'>No car found</h1>
                )
            )
            
            }
        </div>
    );
}

export default Car;