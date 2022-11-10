import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function createdroom() {
    return (
    <>
    <Navbar />
    <div className='flex'>
   <main className='my-16 mx-8 rounded-3xl bg-black ring-1 ring-pink-500'>
        <div className='flex justify-center items-center my-6 mx-16 '>
        <div className='rounded-2xl bg-slate-900 '>

        <div className=' text-3xl my-4 mx-8 cursor-pointer font-bold text-purple-500'>
       Room Details
        </div>
        </div>
        </div>





   </main>
   </div>
    <Footer />
    </>
    )
}