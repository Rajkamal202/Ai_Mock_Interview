"use client"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [path])

    return (
        <div className='flex p-4 items-center justify-between bg-blue-50 shadow-lg'>
            <div className='flex items-center'>
                <Image src='/logo.svg' width={120} height={50} alt='logo' />
                <ul className='hidden md:flex gap-8 ml-8'>
                    <li className={`text-xl hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-blue-700 font-bold'}`}>
                        Dashboard
                    </li>
                    <li className={`text-xl hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard/question' && 'text-blue-700 font-bold'}`}>
                        Question
                    </li>
                    <li className={`text-xl hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-blue-700 font-bold'}`}>
                        Upgrade
                    </li>
                    <li className={`text-xl hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how' && 'text-blue-700 font-bold'}`}>
                        How it works?
                    </li>
                </ul>
            </div>
            <UserButton className='text-xl' />
        </div>
    )
}

export default Header;

