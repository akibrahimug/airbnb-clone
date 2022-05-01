import format from 'date-fns/format/index';
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchCard from '../components/SearchCard';

export default function Search({searchResults}) {
    const router = useRouter();
    const {location, startDate, endDate, numberGuests} = router.query
    const formatStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatendDate = format(new Date(endDate), "dd MMMM yy");
    const dateRange = `${formatStartDate} - ${formatendDate}`
    return (
        <div>
           <Header placeholder={`${location} | ${dateRange} | ${numberGuests}`}/>
           <main className="flex mt-4 ml-4">
            {/* top-main */}
            <section>
                <p className="text-xs">300+ - {dateRange} - Stays for {numberGuests} guests</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap"> 
                    <p className="ll">Cancellation Flexibility</p>
                    <p className="ll">Type of Place</p>
                    <p className="ll">Price</p>
                    <p className="ll">Rooms and Beds</p>
                    <p className="ll">More Filters</p>
                </div>
            {/* left-main */}
                <div className="flex flex-col">
                {searchResults.map(({img, location, title, description, star, price, total, long, lat}, index) => (
                    <SearchCard 
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        long={long}
                        lat={lat}
                        total={total}
                        key={index}
                    />
                ))}
                </div>
            {/* right-main */}
            </section>

           </main> 
           <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then((res) => res.json())
    return{
        props: {
            searchResults
        }
    }
}