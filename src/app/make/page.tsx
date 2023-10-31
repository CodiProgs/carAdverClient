"use client";

import React, { useEffect, useState } from 'react';
import { GetAllMakesQuery } from "@/gql/graphql";
import { GET_ALL_MAKE } from "@/graphql/queries/GetAllMake";
import { useQuery } from "@apollo/client";
import Link from "next/link";

function page () {
    const {data, loading, error} = useQuery<GetAllMakesQuery>(GET_ALL_MAKE)

    const [mount, setMount] = useState(false);
    useEffect(() => {
        if(!loading) {
            setMount(true);
        }
    }, [loading])
    return (
        <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-max max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'> 
        <div className="grid grid-cols-4 gap-10 mb-12 max-lg:grid-cols-3 max-[425px]:grid-cols-2">
            {data?.getAllMakes.map((make) => 
                <div key={make.id} className="w-full bg-white rounded-[14px] py-14">
                <Link href={`/make/${make.id}`} className="w-full h-full flex items-center justify-center">
                    <img src={make.image} alt="" width={1920} height={1080} className="w-[60%] h-auto"/>
                </Link>
                </div>
            )}
        </div>
        </div>
    );
}

export default page;