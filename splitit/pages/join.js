import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function join() {
  return (
    <>
    <Navbar />

    <div className='flex justify-center items-center'>
    <main className='my-16 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 '>
    <div className='flex justify-center items-center my-8 mx-6'>
    <div className='rounded-2xl bg-slate-900'>
        <div className=' text-3xl my-4 mx-8 cursor-pointer font-bold'>
        Enter Room ID
        </div>
        </div>
        </div>
        <div className=" p-8 mx-8 ">
        <input className="h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" placeholder="Room ID">
    </input>
    </div>





    </main>
    </div>
    
    
    <Footer />
    </>

    )


}