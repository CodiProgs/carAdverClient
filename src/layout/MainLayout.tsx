"use client";

import SideNav from '../components/SideNav';
import TopNav from '../components/TopNav';
import { client } from '../utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { useGeneralStore } from '../stores/generalStore';

function MainLayout ({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const setOpenIsSideNav = useGeneralStore((state) => state.setOpenIsSideNav)

    useEffect(() => {
        setOpenIsSideNav(false)
    }, [])

    return (
        <>
            <ApolloProvider client={client}>
                {pathname !== '/auth' ? (
                    <>
                        <header>
                            <TopNav/>
                        </header>
                        <div>
                            <SideNav/>
                        </div>
                        {children}
                    </>
                ) : (
                    <>
                        {children}
                    </>
                )}
                
                
                
            </ApolloProvider>
        </>
    );
}

export default MainLayout;