'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SideNavItem from './SideNavItem';
import { useMutation } from '@apollo/client';
import { LogoutUserMutation } from '../gql/graphql';
import { LOGOUT_USER } from '../graphql/mutations/Logout';
import { useUserStore } from '../stores/userStore';
import { usePathname } from 'next/navigation';
import { useGeneralStore } from '../stores/generalStore';
import { GrAdd } from 'react-icons/gr';

function SideNav () {
    const [logout, {loading, error, data}] = useMutation<LogoutUserMutation>(LOGOUT_USER)
    const user = useUserStore((state) => state)
    const [mount, setMount] = React.useState(false)
    const isOpenSideNav = useGeneralStore((state) => state.isOpenSideNav)
    const setOpenIsSideNav = useGeneralStore((state) => state.setOpenIsSideNav)
    const pathname = usePathname()
    const logoutUser = useUserStore((state) => state.logout)

    const handleLogout = async () => {
        try {
            await logout()
            logoutUser()
        } catch (error) {
            console.log(error)
        }
        setOpenIsSideNav(false)
    }

    useEffect(() => {
        if(!loading){
            setMount(true)
        }
    })
    
        return (
            <div className={['fixed top-0 left-0 max-w-[248px] w-full h-screen z-50 bg-white max-lg:max-w-[200px] max-md:-translate-y-[200%] max-md:top-[80px] max-md:h-[calc(100vh-80px)] transition-all duration-300 max-[425px]:max-w-full',
            isOpenSideNav ? 'max-md:translate-y-0' : ''].join(' ')}>
                <div className="py-[30px] pl-6 pr-[50px] flex flex-col justify-between h-full">
                    <div>
                        <Link href='/'>
                            <Image src='/logo.svg' width={1920} height={1080} alt='Logo' className='w-[140px] h-auto' priority/>
                        </Link>
                        <div className="mt-[35px]">
                            <div className="flex flex-col gap-[10px]">
                                <SideNavItem title='Dashboard' active={pathname === '/'} pathname='/' onClick={() => setOpenIsSideNav(false)}/>
                                <SideNavItem title='Assets' active={pathname === '/car' || pathname.slice(0, 4) === '/car'} pathname='/car' onClick={() => setOpenIsSideNav(false)}/>
                                <SideNavItem title='Brand' active={pathname === '/make'} pathname='/make' onClick={() => setOpenIsSideNav(false)}/>
                                <SideNavItem title='Sellers' active={pathname === '/sellers'} pathname='/sellers' onClick={() => setOpenIsSideNav(false)}/>
                                {mount && (
                                    user.type === 'Pro' || user.type === 'Admin' && (
                                        <div className="hidden max-lg:block">
                                            <SideNavItem title='Post car' active={pathname === '/create/car'} pathname='/create/car' onClick={() => setOpenIsSideNav(false)}/>
                                        </div>
                                    )
                                )}
                                {mount && user.type === 'Admin' && (
                                    <>
                                        <SideNavItem title='Make' active={pathname === '/create/make'} pathname='/create/make' onClick={() => setOpenIsSideNav(false)}/>
                                        <SideNavItem title='Model' active={pathname === '/create/model'} pathname='/create/model' onClick={() => setOpenIsSideNav(false)}/>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {mount && user.id && (
                        <div className="flex flex-col gap-6 ">
                            <SideNavItem title='Settings' active={pathname === '/settings'} pathname='/settings' onClick={() => setOpenIsSideNav(false)}/>
                            <SideNavItem title='Log out' onClick={handleLogout} pathname='/' />
                        </div>
                    )}
                </div>
            </div>
        );
    
}

export default SideNav;