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
   <main className='my-16 mx-8 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-purple-500 '>
        <div className='flex justify-center items-center my-6 mx-12 '>
        <div className='rounded-2xl bg-slate-900 '>

        <div className=' text-3xl my-4 mx-8 cursor-pointer font-bold text-purple-500'>
      Add Group Members
        </div>
        </div>
        </div>
        <div className=" flex flex-col   rounded-xl   mx-8 my-6 p-4 ">
        <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" 
        placeholder="Member 1's  Wallet Address" />
<input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" 
        placeholder="Member 2's  Wallet Address" />
        <input className="px-4 h-12 my-2 border border-1 border-gray-600 rounded-lg outline-blue-600 bg-white text-black" type="text" 
        placeholder="Member 3's  Wallet Address" />
        <button className='bg-slate-900 text-purple-500 items-center justify-center h-12 my-2 rounded-lg text-xl font-bold hover:bg-slate-800'>
 Add Member +
        </button>
</div>




   </main>
   </div>
    <Footer />
    </>
    )
}