import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
       <Head>
    <title>SplitIT</title>
      <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Navbar />

      <main className='my-16 rounded-xl'>
        <div className='flex justify-center items-center my-4'>
          <div className='rounded-2xl bg-slate-900 '>
            <button className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-2 rounded-3xl font-bold my-4 mx-10'>
              Create Room

            </button>

          </div>
          </div>
          <div className='flex justify-center items-center '>
            OR
          </div>



        <div className='flex justify-center items-center my-4'>
          <div className='rounded-2xl bg-slate-900 '>
            <button className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-2 rounded-3xl font-bold my-4 mx-10'>
            Join Room
            </button>

          </div>

        </div>

      </main>

    
    </div>
  )
}
