import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'



export default function Home() {
  return (
    <div className=''>
      <Head>
    <title>SplitIT</title>
      
      </Head> 
      <Navbar />
      <div className='flex justify-center items-center '>
      <main className='my-16 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 '>
        <div className='flex justify-center items-center my-8 mx-6'>
          <div className='rounded-2xl bg-slate-900 '>
          <Link href={'create'}>
            <div className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1 hover:text-white rounded-3xl font-bold my-4 mx-10'>
              Create Room

            </div>
            </Link>

          </div>
          </div>
          <div className='flex justify-center items-center font-bold '>
          OR
          </div>



        <div className='flex justify-center items-center my-8'>
          <div className='rounded-2xl bg-slate-900 '>
          <Link href={'join'}>
            <div className=' text-4xl text-purple-500 cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1 rounded-3xl font-bold my-4 mx-10 hover:text-white'>
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
