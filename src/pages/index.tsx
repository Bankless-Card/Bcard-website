import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import LandingPage from './landingpage'

export default function Home() {
  return (
    <>
      <Head>
        <title>BCard Community</title>
        <meta name='description' content='Support your community with every swipe!' />
      </Head>
       
      <Navbar />
      <LandingPage />
    </>
  )
}
