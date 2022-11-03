import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function create() {
    return (
    <>
    <Navbar />
    <div className='flex justify-center items-center'>
        <main className='my-16 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-purple-500'>


        <div className='flex justify-center items-center my-3 mx-6'>
        <div className='rounded-2xl bg-slate-900'>
        <button className=' text-2xl my-3 mx-8 cursor-pointer font-bold'>
            Create
            </button>
            </div>
            </div>












        </main>
        </div>

    <Footer />
    </>
)

}