import Head from 'next/head';
import Hero from "@/components/Hero"
import Banner from '@/components/Banner';
import TransitionEffect from '@/components/TransitionEffects';
import About from"@/components/About"
import Succes from '@/components/Succes';
import Skillls from '@/components/Skillls';
import Portfolio from '@/components/Projects';
import ServiceSlide from '@/components/ServiceSlide';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="My Personnal Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='dark:bg-black'>
        <Hero/>
        <HireMe/>
        <Banner/>
        <About/>
        <Succes/>
        <ServiceSlide/>
        <Skillls/>
        <Portfolio/>
      </main>

     
      

    </div>
  );
}
