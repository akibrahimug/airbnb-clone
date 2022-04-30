import React from 'react'
import Image from 'next/image'

export default function LargeCard({img, title, descripiton, buttonText}) {
    return (
        <div className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px">
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    className="rounded-xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>{descripiton}</p>
                <button className="text-sm bg-gray-900 text-white rounded-lg px-4 py-2 mt-5">{buttonText}</button>
            </div>
        </div>
    )
}
