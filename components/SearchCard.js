
import React, { useState } from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid';

export default function SearchCard({img, location, title, description, star, price, total}) {
    const [color, setColor] = useState("gray");
    return (
        <div className="md:flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-96 w-90 md:h-64 md:w-80 flex-shrink-0">
                <Image 
                className="rounded-2xl"
                src={img}
                layout="fill"
                objectFit="cover"
                alt=""/>
            </div>
            <div className="flex flex-col flex-grow pl-5 mt-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer active:scale-110" stroke={color} onClick={() => color === "gray" ? (
                        setColor("red")
                    ):(
                        setColor("gray")
                    )}/>
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-6 text-red-400"/>
                        {star}
                    </p>
                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2 text-gray-500">{price}</p>
                        <p className="text-gray-500">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
