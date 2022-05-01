import React, {useState} from 'react'
import Image from 'next/image'
import { SearchIcon, MenuIcon, UserCircleIcon, GlobeAltIcon, UsersIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


export default function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date);
    const [endDate, setEndDate] = useState(new Date);
    const [numberGuests, setNumberGuests] = useState(1)
    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberGuests
            }
        }
        )
    }
    return (
        <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            {/* left */}
            <div onClick={e => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
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
                <input 
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                className="pl-5 bg-transparent flex-grow outline-none text-sm text-gray-600" type="text" placeholder={placeholder || "Start your search"}/>
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
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                         ranges={[selectionRange]}
                         minDate={new Date()}
                         rangeColors={["#fd5b61"]}
                         onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UsersIcon 
                            className="h-5"
                            />
                        <input 
                        onChange={e => setNumberGuests(e.target.value)}
                        min={1}
                        value={numberGuests}
                        type="number" 
                        className="w-12 pl-2 outline-none text-lg text-red-400"/>
                    </div>
                    <div className="flex">
                        <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
                        <button className="flex-grow text-red-400" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            )}
            
        </div>
    )
}
