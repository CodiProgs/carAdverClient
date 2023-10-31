"use client"

import SettingNotification from '../components/SettingNotification';
import SettingPassword from '../components/SettingPassword';
import SettingProfile from '../components/SettingProfile';
import SettingsEmail from '../components/SettingsEmail';
import SettingsPro from '../components/SettingsPro';
import { useUserStore } from '../stores/userStore';
import React, { useEffect } from 'react';


function SettingsPage () {
    const [typeSetting, setTypeSetting] = React.useState('profile')
    const user = useUserStore((state) => state)
    const [monted, setMonted] = React.useState(false)

    useEffect(() => {
        setMonted(true)
    })

    if(monted){
        return (
            <div className='max-w-[calc(100vw-336px)] w-full absolute top-[110px] right-[44px] h-max max-lg:max-w-[calc(100vw-288px)] max-md:max-w-[calc(100vw-88px)] max-md:right-[0] max-md:left-[0] max-md:mx-auto max-[425px]:max-w-[calc(100vw-22px)]'>
                <div className='w-full px-8 py-7 h-max bg-white'>
                    <h1 className='font-bold text-[30px] text-[#242731] mb-8'>Settings</h1>
                    <div className="flex items-center gap-x-12 gap-y-4 mb-12 text-[#5F6165] flex-wrap">
                        <button className={[" text-[18px] py-2 px-4 rounded", typeSetting === 'profile' ? 'bg-[#f6effe] text-[#242731]' : ''].join(' ')} onClick={() => setTypeSetting('profile')}>Profile</button>
                        <button className={[" text-[18px] py-2 px-4 rounded", typeSetting === 'email' ? 'bg-[#f6effe] text-[#242731]' : ''].join(' ')} onClick={() => setTypeSetting('email')}>Email</button>
                        <button className={[" text-[18px] py-2 px-4 rounded", typeSetting === 'password' ? 'bg-[#f6effe] text-[#242731]' : ''].join(' ')} onClick={() => setTypeSetting('password')}>Password</button>
                        {user.type !== 'Pro' && <button className={[" text-[18px] py-2 px-4 rounded", typeSetting === 'pro' ? 'bg-[#f6effe] text-[#242731]' : ''].join(' ')} onClick={() => setTypeSetting('pro')}>Get Pro</button>}
                        {/* <button className={[" text-[18px] py-2 px-4 rounded", typeSetting === 'notification' ? 'bg-[#f6effe] text-[#242731]' : ''].join(' ')} onClick={() => setTypeSetting('notification')}>Notification</button> */}
                    </div>
                    {typeSetting === 'profile' && <SettingProfile/>}
                    {typeSetting === 'email' && <SettingsEmail/>}
                    {typeSetting === 'password' && <SettingPassword/>}
                    {typeSetting === 'pro' && <SettingsPro/>}
                    {/* {typeSetting === 'notification' && <SettingNotification/>} */}
                </div>
            </div>
        );
    }
}

export default SettingsPage;