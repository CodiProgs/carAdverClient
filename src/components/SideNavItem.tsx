import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SideNavItem ({title, onClick, active, pathname} : {title: string, onClick?: () => void, active?: boolean, pathname: string}) {
    const ImageUrl = title.toLowerCase().replace(' ', '')


    return (
        <Link href={pathname} className={['flex items-center gap-2 hover:bg-[#F3F5F8] py-2 px-[9px] rounded-md', active ? 'bg-[#F3F5F8]' : 'bg-white'].join(' ')} onClick={onClick}>
            <Image src={['/', ImageUrl, '.svg'].join('')} width={1920} height={1080} alt='Dashboard' className='w-[20px] h-[20px]'/>
            <div className="text-[#5F6165] text-[14px]">{title}</div>
        </Link>
    );
}

export default SideNavItem;