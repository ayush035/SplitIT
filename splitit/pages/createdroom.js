import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import group from '../public/group.png'


export default function createdroom() {

return (
<>


<Navbar />
<div className='flex'>
<main>
<div className='grid grid-cols-2'>
<div className='my-16 mx-16 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-purple-500 '>
        <div className='flex justify-center items-center my-6 mx-10 '>
        <div className='rounded-2xl bg-slate-900 '>
        <div className=' text-3xl my-4 mx-8 cursor-pointer font-bold text-purple-500'>
Add Group Members
        </div>
        </div>
        </div>

        <div className='flex  justify-end items-end'></div>
        <div className=' text-xl my-24 mx-8 cursor-pointer font-bold text-white'>
                Share This Room code to add members

        </div>

</div>
<div className="flex flex-col my-24 mx-36 justify-center">
<Image
        src={group}
        alt=''
        width="800px"
        height="800px">

        </Image>
        </div>
        

</div>
</main>
</div>

</>
)
}