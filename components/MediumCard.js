import React from 'react'
import Image from 'next/image'

export default function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer transition transform duration-300 hover:scale-105 ease-out">
            <div className="relative h-80 w-80">
                <Image 
                    src={img}
                    layout="fill"
                    alt=""
                    className="rounded-xl"
                />
            </div>
            <h3 className="text-2x mt-3">{title}</h3>
        </div>
    )
}
