import React, { useState } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HomeIcon, StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';


export default function Mapper({searchResults}) {
    

    // Transform the search results to get only lat,long
    const cordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(cordinates)
    const [viewport, setViewport] =  useState({
        width: "100%",
        height: "100%",
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });
    const [selectedLocation, setSelectedLocation] = useState({})
    return (
        <Map 
        mapboxAccessToken={process.env.mapbox_key}
        mapStyle="mapbox://styles/akibrahimug/cl2n6srem000214nxs23lzoqe"
        {...viewport}
        onMove={evt => setViewport(evt.viewport)}
        >

        {searchResults.map((result, index) => (
            <div key={result.long}>
                <Marker
                    key={index}
                    longitude={result.long}
                    latitude={result.lat}
                    onClick={(e) => {
                        e.originalEvent.stopPropagation()
                        setSelectedLocation(result)}}
                >
                <HomeIcon  className="cursor-pointer h-10 bg-red-400 text-white p-2 rounded-full hover:bg-white hover:text-gray-800"/>

                </Marker>
                {selectedLocation.long === result.long ?(
                    <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}
                    >
                    <div className="text-gray-800 cursor-pointer">
                    {/* picture */}
                        <div className="relative h-32 w-56 mb-2">
                            <Image  
                                className="rounded-t-2xl"  
                                src={result.img}
                                layout="fill"
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                        {/* heart */}
                    {/* title */}
                    <p className="flex items-center pl-2">
                        <StarIcon className="h-6 text-red-400"/>
                        {result.star}
                    </p>
                    {/* star */}
                    <div className="pl-3 mt-2 mb-4">{result.title}</div>
                    </div>
                    </Popup>
                ):(
                    false
                )}
            </div>
        ))}
        </Map>
    )
}
