import Head from 'next/head'
import { title } from 'process';
import Bunner from '../components/Bunner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';




export default function Home({smallCardData, mediumCardData}) {
  return (
    <div className="">
      <Head>
        <title>AirBnB-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Bunner */}
      <Bunner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          {/* Api from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
          {smallCardData?.map(({img, location, distance}, index) => (
            <SmallCard  
            img={img} 
            location={location} 
            distance={distance}
            key={index}
            />
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
          {mediumCardData?.map(({img, title}, index) => (
            <MediumCard 
              img={img}
              title={title}
              key={index}
            />
          ))}
          </div>
        </section>
        <LargeCard 
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        descripiton="Wishlists curated by AirBnB"
        buttonText="Get inspired"

        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

// comming from the server
export async function getStaticProps(){
  const smallCardData = await fetch('https://links.papareact.com/pyp')
  .then((res) => res.json());
  
  const mediumCardData = await fetch('https://links.papareact.com/zp1')
  .then((res) => res.json());
  return{
    props: {
      mediumCardData,
      smallCardData
    }
  }
}