"use client";
import React from 'react'
import Image from 'next/image'
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from 'framer-motion';

const Material_bir = () => {
    const isVisible = 0;
  return (
    <div className=' m-10 my-20 grid grid-cols-4 justify-center items-center gap-x-10'>

        <motion.div
        animate={{ opacity: isVisible ? 180 : 90 }}
        >
        <h1 className=' font-bold text-2xl'>Crafted with <br /> excellent <br /> material.</h1>
         <p className=' text-grey mt-3'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit. <br /> Aliquam vulputate velit imperdiet dolor <br /> tempor tristique.</p>
         <button className=' bg-dark mt-5 
      rounded-full px-5 py-2 text-white font-bold'>
        Explore
      </button>
        </motion.div>
     
       {/**  card2 */}
       <div class="group bg-red-400 w-64 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
  <div class="h-40 relative overflow-hidden">
    <Image src={"/image1.png"} className="absolute top-0 left-0 h-full w-full" width={220} height={50}
     alt='image' objectFit='cover'/>
  </div>
  <div class="p-5 opacity-0 group-hover:opacity-100 duration-[3s] -translate-y-6 group-hover:translate-y-0  bg-whiteGreen mt-5">
    <h4 className="font-semibold items-center justify-center ml-7">if you want click <span className=' text-red'>Add</span></h4>
    <div class=" flex gap-2 py-2 px-5 bg-green-dark hover:bg-dark  text-white text-white mt-2 w-fit rounded-md text-sm font-semibold ml-7">
     <AiOutlinePlus className=' justify-center items-center' /> <span className=' text-red'>Add</span> <span className=' text-white'>Product</span>
    </div>
  </div>
</div>

      
       {/**  card2 */}
       <div class="group bg-red-400 w-64 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
  <div class="h-40 relative overflow-hidden">
    <Image src={"/image4.png"} className="absolute top-0 left-0 h-full w-full object-cover" width={220} height={50}
     alt='image' objectFit='cover'/>
  </div>
  <div class="p-5 opacity-0 group-hover:opacity-100 duration-[3s] -translate-y-6 group-hover:translate-y-0  bg-whiteGreen mt-5">
    <h4 className="font-semibold items-center justify-center ml-7">if you want click <span className=' text-red'>Add</span></h4>
    <div class=" flex gap-2 py-2 px-5 bg-green-dark hover:bg-dark  text-white text-white mt-2 w-fit rounded-md text-sm font-semibold ml-7">
     <AiOutlinePlus className=' justify-center items-center' /> <span className=' text-red'>Add</span> <span className=' text-white'>Product</span>
    </div>
  </div>
</div>
         
           
       {/**  card2 */}
       <div class="group bg-red-400 w-64 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
  <div class="h-40 relative overflow-hidden">
    <Image src={"/image3.png"} className="absolute top-0 left-0 h-full w-full object-cover" width={220} height={50}
     alt='image' objectFit='cover'/>
  </div>
  <div class="p-5 opacity-0 group-hover:opacity-100 duration-[3s] -translate-y-6 group-hover:translate-y-0  bg-whiteGreen mt-5">
    <h4 className="font-semibold items-center justify-center ml-7">if you want click <span className=' text-red'>Add</span></h4>
    <div class=" flex gap-2 py-2 px-5 bg-green-dark hover:bg-dark  text-white text-white mt-2 w-fit rounded-md text-sm font-semibold ml-7">
     <AiOutlinePlus className=' justify-center items-center' /> <span className=' text-red'>Add</span> <span className=' text-white'>Product</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default Material_bir
