import Head from 'next/head'
import MobileSlider from '@/Components/MobileSlider/MobileSlider'
import 'aos/dist/aos.css';
import DeskView from '@/Components/DeskView/DeskView';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MobileSlider />
        <DeskView />
      </main>
    </>
  )
}
