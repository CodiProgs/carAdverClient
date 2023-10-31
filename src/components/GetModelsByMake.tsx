"use client";

import { GetAllMakesQuery, GetModelsAllQuery } from '@/gql/graphql';
import { GET_MODEL_ALL } from '@/graphql/queries/GetModelAll';
import { useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';

function GetModelsByMake ({label, setIdModel, errorModelId, brandId} : {label?: string, setIdModel?: (id: number) => void, errorModelId?: string, brandId: number }) {
    const {data, loading, error} = useQuery<GetModelsAllQuery>(GET_MODEL_ALL)

    const [mount, setMount] = useState(false);
    const dropList = useRef<HTMLDivElement>(null)
    const [showList, setShowList] = useState(false)

    const closeOpenMenus = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && !dropList.current?.contains(e.target)) {
            setShowList(false)
        }
    }

    const [usedModel, setUsedModel] = useState('Model')
    useEffect(() => {
        if(!loading) {
            setMount(true);
        }
        document.addEventListener('click', closeOpenMenus)

    }, [loading])

    if(mount){
        return (
            <div className='flex flex-col gap-2'>
                <label className="text-[#242731]">{label}</label>
                <div className="max-w-[500px] w-full z-50 relative" ref={dropList}>
                    <button onClick={() => setShowList(!showList)} className="w-full rounded-[10px] px-5 py-5 outline-none text-[#5F6165] border border-[#B1B5C3] justify-between items-center flex" aria-haspopup="menu">
                        <p>{usedModel}</p>
                        <span className="border-l-[5px] border-r-[5px] border-t-[6px] border-white border-t-[#5F6165] transition-all duration-300"></span>
                    </button>
                    {showList && (
                        <ul className="list-none mt-2 w-full flex-col gap-1 flex absolute" role="menu">
                            {data?.getModelsAll.filter((item) => item.brand?.id === brandId).map((model) => (
                                <li key={model.id} onClick={() => {setIdModel!(model.id!); setShowList(false); setUsedModel(model.name)}} className="w-full rounded-[10px] px-5 py-5 outline-none text-[#5F6165] border border-[#B1B5C3] cursor-pointer bg-gray-100 hover:bg-gray-200"><a href="#">{model.name}</a></li>
                            ))}
                        </ul>
                    )}
                    {errorModelId && <p className='text-red-500'>{errorModelId}</p>}
                </div>
            </div>
        );
    }
}

export default GetModelsByMake;