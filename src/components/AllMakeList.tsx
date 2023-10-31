"use client";

import { GetAllMakesQuery } from '../gql/graphql';
import { GET_ALL_MAKE } from '../graphql/queries/GetAllMake';
import { useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';

function AllMakeList ({label, setIdMake, errorMakeId} : {label?: string, setIdMake?: (id: number) => void, errorMakeId?: string  }) {
    const {data, loading, error} = useQuery<GetAllMakesQuery>(GET_ALL_MAKE)
    const [mount, setMount] = useState(false);
    const dropList = useRef<HTMLDivElement>(null)
    const [showList, setShowList] = useState(false)

    const closeOpenMenus = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && !dropList.current?.contains(e.target)) {
            setShowList(false)
        }
    }

    const [usedBrand, setUsedBrand] = useState('Brand')
    useEffect(() => {
        if(!loading) {
            setMount(true);
        }
        document.addEventListener('click', closeOpenMenus)

    }, [loading])
    
    if(mount){
        return (
            <div className="flex flex-col gap-2" onClick={(e) => {}}>
                <label className='text-[#242731]'>{label}</label>
                <div className="max-w-[500px] w-full z-50 relative" ref={dropList}>
                    <button onClick={() => setShowList(!showList)} className="w-full rounded-[10px] px-5 py-5 outline-none text-[#5F6165] border border-[#B1B5C3] justify-between items-center flex" aria-haspopup="menu">
                        <p>{usedBrand}</p>
                        <span className="border-l-[5px] border-r-[5px] border-t-[6px] border-white border-t-[#5F6165] transition-all duration-300"></span>
                    </button>
                    {showList && (
                        <ul className="list-none mt-2 w-full flex-col gap-1 flex absolute" role="menu">
                            {data?.getAllMakes.map((make) => (
                                <li key={make.id} onClick={() => {setIdMake!(make.id!); setShowList(false); setUsedBrand(make.name)}} className="w-full rounded-[10px] px-5 py-5 outline-none text-[#5F6165] border border-[#B1B5C3] cursor-pointer bg-gray-100 hover:bg-gray-200"><a href="#">{make.name}</a></li>
                            ))}
                        </ul>
                    )}
                    {errorMakeId && <p className='text-red-500'>{errorMakeId}</p>}
                </div>
            </div>
        );
    }
}

export default AllMakeList;