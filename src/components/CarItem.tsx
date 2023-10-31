
import Link from 'next/link';
import React from 'react';
import { BiShare } from 'react-icons/bi';

function CarItem ({text, image, price, id}: {text: string, image: string, price: number, id: number}) {
    return (
        <>
            <Link href={'/cars/' + id}>
                <div className='px-5 py-3 bg-white rounded-[14px]'>
                    <img className='mb-5' src={image} width={1920} height={1080} alt='Car'/>
                    <div className="text-xl font-bold text-black mb-1">{text}</div>
                    <div className="text-sm text-[#72767C]">{price} $</div>
                </div>
            </Link>
        </>
    );
}

export default CarItem;