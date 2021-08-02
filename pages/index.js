import Head from 'next/head'
import Promotedcoins from '../components/promotedcoins'
import Table from '../components/table'
import AdvSection from '../components/AdvSection'

export default function Home(  ) {
  return (
    <div className="">
      <Head>
        <title>CoinShooter</title>
        <meta name="coinshooter" content="Cryptocurrency vote system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <AdvSection/>
      <Promotedcoins/>
      <div className="items-center text-justify max-w-screen-2xl mx-auto mb-20">
      <Table/>
      
      </div>
      
      
    </div>
  )
}


