import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
<div className='flex justify-center items-center'>
    <nav className='flex justify-between h-12 font-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl'>
        <span className='cursor-pointer font-bold text-3xl mx-4 my-2 flex transition ease-in-out delay-50 hover:-translate-y-3'>
            Split IT
        </span>
        <ul className= 'px-2 py-3 flex space-x-9'>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Home</li>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Room</li>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Transactions</li>
            <li className='cursor-pointer text-xl font-bold transition ease-in-out delay-50 hover:-translate-y-1'>Settings</li>

        </ul>
    </nav>

</div>


  )
}