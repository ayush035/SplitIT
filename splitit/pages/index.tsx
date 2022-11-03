import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
    <title>SplitIT</title>
      <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head> 
      <Navbar />
      <div className='flex justify-center items-center'>
      <main className='my-16 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 '>
        <div className='flex justify-center items-center my-8 mx-6'>
          <div className='rounded-2xl bg-slate-900 '>
          <Link href={'create'}>
            <div className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-2 rounded-3xl font-bold my-4 mx-10'>
              Create Room

            </div>
            </Link>

          </div>
          </div>
          <div className='flex justify-center items-center '>
            OR
          </div>



        <div className='flex justify-center items-center my-8'>
          <div className='rounded-2xl bg-slate-900 '>
          <Link href={'join'}>
            <div className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-2 rounded-3xl font-bold my-4 mx-10'>
            Join Room
            </div>
            </Link>

          </div>

        </div>
      </main>
      </div>


    
    </div>
  )
}
