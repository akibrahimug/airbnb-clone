import React from 'react'
import Image from 'next/image'
import { SearchIcon, MenuIcon, UserCircleIcon, UsersIcon, GlobeAltIcon} from '@heroicons/react/solid'

export default function Header() {
    return (
        <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                    src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt=""
                />
            </div>
            {/* middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input className="pl-5 bg-transparent flex-grow outline-none text-sm text-gray-600" type="text" placeholder="Start your search"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer md:mx-2"/>
            </div>
            {/* right */}
            <div className="flex space-x-2 items-center justify-end text-gray-500">
               <p className="hidden md:inline cursor-pointer">Become a host</p>
               <GlobeAltIcon className="h-6 cursor-pointer"/>

               <div className="flex items-center space-x-2 rounded-full p-2 border-2">
                   <MenuIcon className="h-6"/>
                   <UserCircleIcon className="h-6" />
               </div>
            </div>
        </div>
    )
}
