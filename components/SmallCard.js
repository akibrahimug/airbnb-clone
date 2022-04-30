import React from 'react'
import Image from 'next/image'

export default function SmallCard({img, location, distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 hover:scale-105 transition transform duration-200 ease-out rounded-xl hover:bg-gray-100">
            {/* left image */}
            <div className="relative h-16 w-16">
                <Image 
                    className="rounded-lg"
                    src={img}
                    layout="fill"
                    alt=""
                /> 
            </div>
            {/* right text */}
            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}
