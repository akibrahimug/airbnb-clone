import format from "date-fns/format/index";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchCard from "../components/SearchCard";
import Mapper from "../components/Mapper";

const searchResults = [
  {
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine",
    star: 4.73,
    price: "30/night",
    total: "117 total",
    long: -0.118092,
    lat: 51.509865,
  },
  {
    img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2516&q=80",
    location: "Private room in center of London",
    title: "Independent luxury studio apartment",
    description:
      "2 guest - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen",
    star: 4.3,
    price: "40/night",
    total: "157 total",
    long: -0.099989,
    lat: 51.528558,
  },
  {
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2580&q=80",
    location: "Private room in center of London",
    title: "Independent luxury studio apartment",
    description:
      "2 guest - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen",
    star: 4.3,
    price: "40/night",
    total: "157 total",
    long: -0.109989,
    lat: 51.600558,
  },
  {
    img: "https://images.unsplash.com/photo-1574643014728-053f16745e49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    location: "Private room in center of London",
    title: "Independent luxury studio apartment",
    description:
      "2 guest - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen",
    star: 4.5,
    price: "40/night",
    total: "157 total",
    long: -0.109989,
    lat: 51.698558,
  },
];

export default function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numberGuests } = router.query;
  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatendDate = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `${formatStartDate} - ${formatendDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${dateRange} | ${numberGuests}`} />
      <main className="flex">
        {/* top-main */}
        <section className="mt-4 ml-4 xl:min-w-[38vw]">
          <p className="text-xs text-gray-500">
            300+ - {dateRange} - Stays for {numberGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="ll">Free Cancellation</p>
            <p className="ll">Type of Place</p>
            <p className="ll">Price</p>
            <p className="ll">Rooms and Beds</p>
            <p className="ll">More Filters</p>
          </div>
          {/* left-main */}
          <div className="flex flex-col">
            {searchResults.map(
              (
                {
                  img,
                  location,
                  title,
                  description,
                  star,
                  price,
                  total,
                  long,
                  lat,
                },
                index
              ) => (
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
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex ml-2 xl:min-w-[60vw]">
          <Mapper searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

// export async function getServerSideProps() {
//   const searchResults = await fetch("https://links.papareact.com/isz").then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       searchResults,
//     },
//   };
// }
